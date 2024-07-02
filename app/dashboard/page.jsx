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

                // Load equipment submissions
                const submissionsRef = collection(firestore, 'pengajuanAlat');
                const q = query(submissionsRef, where('userId', '==', user.uid));
                const unsubscribeSubmissions = onSnapshot(q, (snapshot) => {
                    const submissionsData = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setSubmissions(submissionsData);
                    setLoading(false);
                });

                return () => unsubscribeSubmissions();
            } else {
                router.push('/auth/login'); // Redirect to login page if not authenticated
            }
        });

        return () => {
            unsubscribeAuth();
        };
    }, [auth, firestore, router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/auth/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Failed to log out', error);
            // Handle logout error
        }
    };

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

    const handleGenerate = (data) => {
        setPlantsPerRow(data);
        generateData();
        setStep(5);
    };

    const generateData = async () => {
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
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Logout
            </button>
            <div className="app-container relative w-full h-screen overflow-hidden">
                {!dataGenerated ? (
                    <div className="flex">
                        <motion.div className={`step w-full transition-transform duration-300 ease-in-out ${step === 1 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 1 && <ImageSelector onNext={handleNext} />}
                        </motion.div>
                        <motion.div className={`step w-full transition-transform duration-300 ease-in-out ${step === 2 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 2 && (
                                <GardenSizeSelector onNext={handleNext} onBack={handleBack} />
                            )}
                        </motion.div>
                        <motion.div className={`step w-full transition-transform duration-300 ease-in-out ${step === 3 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 3 && (
                                <RowCountSelector onNext={handleNext} onBack={handleBack} />
                            )}
                        </motion.div>
                        <motion.div className={`step w-full transition-transform duration-300 ease-in-out ${step === 4 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 4 && (
                                <RowPlantSelector onGenerate={handleGenerate} onBack={handleBack} />
                            )}
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex">
                        <motion.div className={`step w-full transition-transform duration-300 ease-in-out ${step === 5 ? "translate-x-0" : "translate-x-full"}`}>
                            {step === 5 && dataGenerated && (
                                <GeneratedData data={generatedData} imageUrl={imageUrl} />
                            )}
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Modal untuk pengajuan alat */}
            {modalOpen && (
    <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                Pengajuan Alat Baru
                            </h3>
                            <div className="mt-2">
                                <div className="mb-4">
                                    <label htmlFor="namaAlat" className="block text-sm font-medium text-gray-700">
                                        Nama Alat
                                    </label>
                                    <input
                                        type="text"
                                        id="namaAlat"
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={namaAlat}
                                        onChange={(e) => setNamaAlat(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="alamatKebun" className="block text-sm font-medium text-gray-700">
                                        Alamat Kebun
                                    </label>
                                    <input
                                        type="text"
                                        id="alamatKebun"
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={alamatKebun}
                                        onChange={(e) => setAlamatKebun(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="noTelepon" className="block text-sm font-medium text-gray-700">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        id="noTelepon"
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={noTelepon}
                                        onChange={(e) => setNoTelepon(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="jumlahAlat" className="block text-sm font-medium text-gray-700">
                                        Jumlah Alat
                                    </label>
                                    <input
                                        type="number"
                                        id="jumlahAlat"
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={jumlahAlat}
                                        onChange={(e) => {
                                            setJumlahAlat(e.target.value);
                                            // Hitung total harga berdasarkan jumlah alat
                                            let hargaPerAlat = 50000; // Harga per alat
                                            let jumlah = parseInt(e.target.value); // Ubah ke tipe integer
                                            let totalHarga = hargaPerAlat * jumlah; // Hitung total harga
                                            setTotalHargaAlat(totalHarga); // Update state totalHargaAlat
                                        }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="totalHarga" className="block text-sm font-medium text-gray-700">
                                        Total Harga Alat
                                    </label>
                                    <input
                                        type="text"
                                        id="totalHarga"
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        value={`Rp ${totalHargaAlat}`} // Tampilkan total harga dengan format Rupiah
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleSubmitModal}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setModalOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            </motion.div>
        </div>
    </div>
)}


            {/* Modal konfirmasi pengajuan */}
            {confirmationOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Konfirmasi Pengajuan
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Apakah Anda yakin ingin mengajukan alat dengan nama <strong>{namaAlat}</strong>?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleConfirmSubmission}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setConfirmationOpen(false)}
                                >
                                    No
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Daftar pengajuan alat */}
            <div className="mt-8 m-5">
                <h2 className="text-lg font-medium text-gray-900">Pengajuan Alat</h2>
                <button onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                    Ajukan alat
                </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Nama Alat: {submission.namaAlat}</h2>
              <p className="text-gray-600 mb-2">Alamat Kebun: {submission.alamatKebun}</p>
              <p className="text-gray-600 mb-2">No Telepon : {submission.noTelepon}</p>
              <p className="text-gray-600 mb-2">Jumlah Alat : {submission.jumlahAlat}</p>
              <p className="text-gray-600 mb-2">Total Harga Alat : Rp {submission.totalHarga}</p>
              <p className="text-gray-600 mb-2">Status : {submission.status}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Lihat Selengkapnya
              </button>
            </div>
          ))}
        </div>
            </div>

        </div>
    );
}

export default Dashboard;
