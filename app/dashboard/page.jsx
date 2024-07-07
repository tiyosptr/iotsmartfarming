"use client"
import React, { useState, useEffect } from "react";
import ImageSelector from '../../components/ImageSelector';
import GardenSizeSelector from "../../components/GardenSizeSelector";
import RowCountSelector from "../../components/RowCountSelector";
import RowPlantSelector from "../../components/RowPlantSelector";
import GeneratedData from "../../components/GeneratedData";
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";

const getImageUrlFromPlant = (plant) => {
    switch (plant) {
        case "kangkung":
            return "/img/kangkung.png";
        case "bayam":
            return "/img/bayam.jpg";
        case "cabe":
            return "/img/cabe.jpg";
        default:
            return "/img/default.png";
    }
};

function Dashboard() {
    const [step, setStep] = useState(1);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedRowCount, setSelectedRowCount] = useState(null);
    const [plantsPerRow, setPlantsPerRow] = useState(null);
    const [generatedData, setGeneratedData] = useState(null);
    const [dataGenerated, setDataGenerated] = useState(false);
    const [imageUrl, setImageUrl] = useState("/img/kangkung.png");
    const [user, setUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [namaAlat, setNamaAlat] = useState('');
    const [alamatKebun, setAlamatKebun] = useState('');
    const [noTelepon, setNoTelepon] = useState('');
    const [jumlahAlat, setJumlahAlat] = useState('');
    const [confirmationOpen, setConfirmationOpen] = useState(false); // State for confirmation modal
    const [submissions, setSubmissions] = useState([]);
    const [totalHargaAlat, setTotalHargaAlat] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const auth = FirebaseConfig().auth;
    const firestore = FirebaseConfig().firestore;
    const router = useRouter();

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                // Check if user has already generated data
                const userDocRef = doc(firestore, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists() && userDocSnap.data().generatedData) {
                    setGeneratedData(userDocSnap.data().generatedData);
                    setDataGenerated(true);
                    setStep(5); // Skip to the generated data display step
                }
            } else {
                router.push('/auth/login'); // Redirect to login page if not authenticated
            }
        });

        return () => {
            unsubscribeAuth();
        };
    }, [auth, firestore, router]);


    const handleNext = (data) => {
        if (dataGenerated) return;
        switch (step) {
            case 1:
                setSelectedPlant(data);
                setImageUrl(getImageUrlFromPlant(data));
                setStep(2);
                break;
            case 2:
                setSelectedSize(data);
                setStep(3);
                break;
            case 3:
                setSelectedRowCount(data);
                setStep(4);
                break;
            default:
                break;
        }
    };

    const handleBack = () => {
        if (dataGenerated) return;
        setStep(step - 1);
    };
    const handleGenerate = (plantsPerRow) => {
        setPlantsPerRow(plantsPerRow); // Pastikan plantsPerRow diatur
        generateData(selectedPlant, selectedSize, selectedRowCount, plantsPerRow); // Panggil generateData dengan nilai yang diperlukan
        setStep(5);
    };

    const generateData = async (selectedPlant, selectedSize, selectedRowCount, plantsPerRow) => {
        const data = {
            selectedPlant,
            selectedSize,
            selectedRowCount,
            plantsPerRow,
        };
        setGeneratedData(data);
        setDataGenerated(true);
        if (user) {
            const userDocRef = doc(firestore, "users", user.uid);
            await setDoc(userDocRef, {
                generatedData: data,
            }, { merge: true });
        }
    };

    const handleSubmitModal = async () => {
        // Hitung total harga berdasarkan jumlah alat
        let hargaPerAlat = 50000; // Harga per alat
        let jumlah = parseInt(jumlahAlat); // Ubah ke tipe integer
        let totalHarga = hargaPerAlat * jumlah; // Hitung total harga

        // Simpan data ke Firestore
        const submissionData = {
            namaAlat,
            alamatKebun,
            noTelepon,
            jumlahAlat,
            totalHarga, // Simpan total harga di Firestore
            userId: user.uid,
            status: 'Pending' // Contoh status
        };

        try {
            // Tampilkan konfirmasi sebelum pengajuan
            setConfirmationOpen(true);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    const handleConfirmSubmission = async () => {
        // Hitung total harga berdasarkan jumlah alat (opsional jika sudah dihitung sebelumnya)
        let hargaPerAlat = 50000; // Harga per alat
        let jumlah = parseInt(jumlahAlat); // Ubah ke tipe integer
        let totalHarga = hargaPerAlat * jumlah; // Hitung total harga

        // Simpan data ke Firestore setelah konfirmasi
        const submissionData = {
            namaAlat,
            alamatKebun,
            noTelepon,
            jumlahAlat,
            totalHarga, // Simpan total harga di Firestore
            userId: user.uid,
            email: user.email,
            status: 'Menunggu Persetujuan Admin' // Contoh status
        };

        try {
            const docRef = await addDoc(collection(firestore, 'pengajuanAlat'), submissionData);
            console.log('Document written with ID: ', docRef.id);

            // Update local state immediately after adding the document
            setSubmissions([...submissions, { id: docRef.id, ...submissionData }]);
            setTotalHargaAlat(totalHarga); // Update state totalHargaAlat

            // Tambahkan logika untuk menutup modal dan membersihkan state
            setModalOpen(false);
            setConfirmationOpen(false);
            setNamaAlat('');
            setAlamatKebun('');
            setNoTelepon('');
            setJumlahAlat('');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };


    return (
        <div>
            <Header />
            <div className="app-container relative w-full h-screen overflow-hidden">
                {!dataGenerated ? (
                    <div className="flex">
                        <motion.div className={`absolute step w-full transition-transform duration-700 ease-in-out ${step === 1 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 1 && <ImageSelector onNext={handleNext} />}
                        </motion.div>
                        <motion.div className={`absolute step w-full transition-transform duration-700 ease-in-out ${step === 2 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 2 && (
                                <GardenSizeSelector onNext={handleNext} onBack={handleBack} />
                            )}
                        </motion.div>
                        <motion.div className={`absolute step w-full transition-transform duration-700 ease-in-out ${step === 3 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 3 && (
                                <RowCountSelector onNext={handleNext} onBack={handleBack} />
                            )}
                        </motion.div>
                        <motion.div className={`absolute step w-full transition-transform duration-700 ease-in-out ${step === 4 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 4 && (
                                <RowPlantSelector onGenerate={handleGenerate} onBack={handleBack} />
                            )}
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex">
                        <motion.div className={`absolute step w-full transition-transform duration-700 ease-in-out ${step === 5 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 5 && dataGenerated && (
                                <GeneratedData data={generatedData} imageUrl={imageUrl} />
                            )}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;