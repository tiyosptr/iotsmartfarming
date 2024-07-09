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
    <div className="flex bg-gray-100">
      {/* Sidebar */}
     
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
         <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">List Pengajuan Alat</span>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-900"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/listpengajuan"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-900"
              >
                <svg
                  className="w-6 h-6 text-gray-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a1 1 0 0 0 0 2h.687L7.82 15.24A3 3 0 1 0 11.83 17h2.34A3 3 0 1 0 17 15H9.813l-.208-1h8.145a1 1 0 0 0 .979-.796l1.25-6A1 1 0 0 0 19 6h-2.268A2 2 0 0 1 15 9a2 2 0 1 1-4 0 2 2 0 0 1-1.732-3h-1.33L7.48 3.796A1 1 0 0 0 6.5 3H5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M14 5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2h-1V5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Pengajuan Alat
                </span>
              </a>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-10 ">
        <Head>
          <title>Pengajuan Alat</title>
          <meta name="description" content="Dashboard with sidebar menu" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-2xl font-bold mb-5">Pengajuan Alat</h1>

        {/* Cards */}
        <div className="sm:ml-60">
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
                <p className={`text-white py-2 px-1 rounded-md ${getStatusButtonClass(item.status)}`}>{item.status}</p>
              </div>
              <button
                onClick={() => { setSelectedData(item); openConfirmationModal('Di Setujui dan Sedang Di proses'); }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
              >
                Setujui
              </button>
              <button
                onClick={() => { setSelectedData(item); openConfirmationModal('Pengajuan Alat Selesai'); }}
                className="mt-4 bg-green-500  hover:bg-green-600 text-white py-2 px-4 rounded-md"
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
