"use client"
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { doc, setDoc, getDoc, addDoc, collection, query, where, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';

// Detail Modal Component
const DetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Detail Pengajuan</h2>
        <p className="text-gray-600 mb-2"><strong>Nama:</strong> {data.nama}</p>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {data.email}</p>
        <p className="text-gray-600 mb-2"><strong>Tanaman Terpilih:</strong> {data.tanaman}</p>
        <p className="text-gray-600 mb-2"><strong>Ukuran Taman:</strong> {data.ukuran}</p>
        <p className="text-gray-600 mb-2"><strong>Jumlah Baris:</strong> {data.jumlahBaris}</p>
        <p className="text-gray-600 mb-2"><strong>Tanaman Per Baris:</strong> {data.tanamanPerBaris}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, status }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Konfirmasi</h2>
        <p className="text-gray-600 mb-4">Apakah Anda yakin mengubah status menjadi {status}?</p>
        <button
          onClick={onConfirm}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-2"
        >
          Ya
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Tidak
        </button>
      </div>
    </div>
  );
};

export default function Pendaftaran() {
  const [user, setUser] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [pengajuanData, setPengajuanData] = useState([]);
  const auth = FirebaseConfig().auth;
  const firestore = FirebaseConfig().firestore;
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        fetchPengajuanData();
      } else {
        router.push('/auth/login'); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPengajuanData = async () => {
    try {
      const dataCollection = collection(firestore, 'pengajuanAlat'); // Replace with your collection name
      const querySnapshot = await getDocs(dataCollection);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setPengajuanData(items);
    } catch (error) {
      console.error('Error fetching pengajuanAlat data:', error);
      // Handle error
    }
  };
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to log out', error);
      // Handle logout error
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const docRef = doc(firestore, 'pengajuanAlat', id);
      await updateDoc(docRef, {
        status: newStatus
      });
      // Fetch updated data
      fetchPengajuanData();
    } catch (error) {
      console.error('Error updating status:', error);
      // Handle error
    }
  };

  const openDetailModal = (data) => {
    setSelectedData(data);
    setDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedData(null);
    setDetailModalOpen(false);
  };

  const openConfirmationModal = (status) => {
    setSelectedStatus(status);
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setSelectedStatus('');
    setConfirmationModalOpen(false);
  };

  const confirmStatusChange = () => {
    if (selectedData) {
      updateStatus(selectedData.id, selectedStatus);
    }
    closeConfirmationModal();
  };

  const getStatusButtonClass = (status) => {
    if (status === 'Pengajuan Alat Selesai') {
      return 'bg-green-500 ';
    } if (status === 'Tidak Di setujui') {
      return 'bg-red-500 '
    }   if (status === 'Menunggu Persetujuan Admin') {
      return 'bg-blue-500 '
    }  
    else {
      return 'bg-yellow-500 ';
    } 
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 h-full text-white">
        <div className="flex items-center justify-center h-16 text-xl font-semibold">
          Dashboard
        </div>
        <nav className="mt-5">
          <Link href="/admin/dashboard">
            <div className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
              Dashboard
            </div>
          </Link>
          <Link href="/admin/listpengajuan">
            <div className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
              Pengajuan Alat
            </div>
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Head>
          <title>Pengajuan Alat</title>
          <meta name="description" content="Dashboard with sidebar menu" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-2xl font-bold mb-5">Pengajuan Alat</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pengajuanData.map((item) => (
            <div key={item.id} className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Email: {item.email}</h2>
              <p className="text-gray-600 mb-2">Nama Alat: {item.namaAlat}</p>
              <p className="text-gray-600 mb-2">Alamat Kebun: {item.alamatKebun}</p>
              <p className="text-gray-600 mb-2">User Id: {item.userId}</p>
              <p className="text-gray-600 mb-2">No Telepon: {item.noTelepon}</p>
              <p className="text-gray-600 mb-2">Jumlah Alat: {item.jumlahAlat}</p>
              <p className="text-gray-600 mb-2">Total Harga: {item.totalHarga}</p>
              <div className="flex items-center mb-2">
                <p className="text-gray-600 mr-2">Status:</p>
                <p className={`text-white py-2 px-4 rounded-md ${getStatusButtonClass(item.status)}`}>{item.status}</p>
              </div>
              <button
                onClick={() => { setSelectedData(item); openConfirmationModal('Di Setujui dan Sedang Di proses'); }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
              >
                Setujui
              </button>
              <button
                onClick={() => { setSelectedData(item); openConfirmationModal('Pengajuan Alat Selesai'); }}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
              >
                Pengajuan Alat Selesai
              </button>
              <button
                onClick={() => { setSelectedData(item); openConfirmationModal('Tidak Di setujui'); }}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
              >
                Tidak Di setujui
              </button>
              <button
                onClick={() => openDetailModal(item)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Lihat Selengkapnya
              </button>
            </div>
          ))}
        </div>

        {/* Modals */}
        <DetailModal isOpen={detailModalOpen} onClose={closeDetailModal} data={selectedData} />
        <ConfirmationModal
          isOpen={confirmationModalOpen}
          onClose={closeConfirmationModal}
          onConfirm={confirmStatusChange}
          status={selectedStatus}
        />
      </main>
    </div>
  );
}
