"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";

export default function Home() {
  const [user, setUser] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [alamatKebun, setAlamatKebun] = useState("");
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
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
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
                href="admin/listpengajuan"
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
      <main className="flex-1 p-10">
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard with sidebar menu" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>

        {/* Table Dashboard */}
        <div class="relative overflow-x-auto bg-white shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-7 py-3">
                    No 
                </th>
                <th scope="col" class="px-6 py-3">
                    Nama
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanaman Terpilih
                </th>
                <th scope="col" class="px-6 py-3">
                    Ukuran Tanaman
                </th>
                <th scope="col" class="px-6 py-3">
                    Jumlah Baris
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanaman Perbaris
                </th>
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
