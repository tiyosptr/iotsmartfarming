"use client"
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";

// Modal Component
const Modal = ({ isOpen, onClose, data }) => {
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

export default function Pendaftaran() {
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State untuk mengontrol modal
  const [selectedData, setSelectedData] = useState(null); // State untuk menyimpan data yang dipilih
  const auth = FirebaseConfig().auth;
  const router = useRouter();

  // Data contoh pengajuan alat
  const pengajuanData = [
    {
      id: 1,
      nama: "Contoh Nama 1",
      email: "contoh1@example.com",
      tanaman: "Padi",
      ukuran: "10x10 meter",
      jumlahBaris: 5,
      tanamanPerBaris: "Jagung",
    },
    {
      id: 2,
      nama: "Contoh Nama 2",
      email: "contoh2@example.com",
      tanaman: "Jagung",
      ukuran: "8x8 meter",
      jumlahBaris: 4,
      tanamanPerBaris: "Kacang Hijau",
    },
    // Tambahkan data lain sesuai kebutuhan
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/auth/login'); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to log out', error);
      // Handle logout error
    }
  };

  // Fungsi untuk menampilkan modal dengan data yang dipilih
  const openModal = (data) => {
    setSelectedData(data);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedData(null);
    setModalOpen(false);
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
              <h2 className="text-lg font-semibold mb-2">Nama: {item.nama}</h2>
              <p className="text-gray-600 mb-2">Email: {item.email}</p>
              <p className="text-gray-600 mb-2">Tanaman Terpilih: {item.tanaman}</p>
              <p className="text-gray-600 mb-2">Ukuran Taman: {item.ukuran}</p>
              <p className="text-gray-600 mb-2">Jumlah Baris: {item.jumlahBaris}</p>
              <p className="text-gray-600 mb-2">Tanaman Per Baris: {item.tanamanPerBaris}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Lihat Selengkapnya
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal isOpen={modalOpen} onClose={closeModal} data={selectedData} />

      </main>
    </div>
  );
}
