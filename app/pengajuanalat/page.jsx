"use client"
import Link from "next/link"; 
import Head from "next/head";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";


export default function Pendaftaran() {
  const [user, setUser] = useState(null);
  const auth = FirebaseConfig().auth;
  const router = useRouter();

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <Head>
          <title>Dashboard</title>
        </Head>

        <h1 className="text-2xl font-bold mb-2">Pendaftaran</h1>
        {/* kiri */}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Nama Kebun
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Alamat Kebun
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          {/* kanan */}
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
            Jumlah Alat
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
            No Telepon
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </main>
    </div>
  );
}
