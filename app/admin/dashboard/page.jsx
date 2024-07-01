"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";

export default function Home() {
  const [user, setUser] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const auth = FirebaseConfig().auth;
  const db = getFirestore(FirebaseConfig().app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchUsersData();
      } else {
        router.push("/auth/login"); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUsersData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsersData(usersList);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out", error);
      // Handle logout error
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
          <Link href="">
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
          <title>Dashboard</title>
          <meta name="description" content="Dashboard with sidebar menu" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>

        {/* Tabel Dashboard */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-300 shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                <th className="py-3 px-6 text-left">No</th>
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Tanaman Terpilih</th>
                <th className="py-3 px-6 text-left">Ukuran Taman</th>
                <th className="py-3 px-6 text-left">Jumlah Baris</th>
                <th className="py-3 px-6 text-left">Tanaman Per Baris</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((userData, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {userData.name || "N/A"}
                  </td>
                  <td className="py-3 px-6 text-left">{userData.email}</td>
                  <td className="py-3 px-6 text-left">
                    {userData.generatedData?.selectedPlant || "N/A"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {userData.generatedData?.selectedSize || "N/A"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {userData.generatedData?.selectedRowCount || "N/A"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {userData.generatedData?.plantsPerRow || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
