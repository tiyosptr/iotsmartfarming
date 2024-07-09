"use client"
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { collection, onSnapshot,query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Page() {
  const [sensorData, setSensorData] = useState([]);
  const [user, setUser] = useState(null);
  const firestore = FirebaseConfig().firestore;
  const auth = getAuth();
  const router = useRouter()
  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // User is not authenticated, redirect to login page
        router.push("/auth/login");
      } else {
        setUser(currentUser);
      }
    });

    // Cleanup function for auth subscription
    return () => unsubscribeAuth();
  }, [auth, router]);

  useEffect(() => {
    // Menggunakan onSnapshot untuk mendapatkan data secara real-time
    if (user) {
      const q = query(collection(firestore, 'sensor'), where('id_user', '==', user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const sensorData = doc.data();
          const timestamp = sensorData.timestamp
            ? sensorData.timestamp.split(' ')
            : ['Loading...', 'Loading...'];
          
          const date = new Date(timestamp[0]);
          const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
          const dayName = days[date.getUTCDay()];
  
          return { id: doc.id, ...sensorData, day: dayName, time: timestamp[1] };
        });
  
        // Membalik urutan data menjadi terbaru di atas
        data.reverse();
        setSensorData(data);
      });
  
      // Cleanup function untuk unsubscribe dari snapshot
      return () => unsubscribe();
    }
  }, [user, firestore]);
  
  // Fungsi untuk menentukan kelas warna berdasarkan suhu
  const getSuhuColorClass = (temperature) => {
    if (temperature >= 38) {
      return "text-red-600"; // Jika suhu >= 30°C, warna teks merah
    } else if (temperature >= 35 && temperature < 30) {
      return "text-yellow-500"; // Jika suhu >= 20°C dan < 30°C, warna teks kuning
    } else {
      return "text-blue-500"; // Default: gunakan warna standar
    }
  };

  return (
    <div>
      <Head>
        <title>Table</title>
      </Head>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-20 lg:px-20">
          <p className="text-end">Keterangan</p>
          <div className="flex justify-end space-x-4 mt-4 mb-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl">
              Dingin
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl">
              Hangat
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl">
              Panas
            </button>
          </div>
          <div className="bg-white overflow-hidden shadow-md sm:rounded-2xl">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right dark:text-black rounded-2xl">
                <thead className="text-xs text-black uppercase">
                  <tr>
                    <th className="px-6 py-3">Hari</th>
                    <th className="px-6 py-3">Jam</th>
                    <th className="px-6 py-3">Suhu</th>
                    <th className="px-6 py-3">Kelembapan Tanah</th>
                    <th className="px-6 py-3">Kelembapan Udara</th>
                    <th className="px-6 py-3">Intensitas Cahaya</th>
                    <th className="px-6 py-3">koordinat</th>
                  </tr>
                </thead>
                <tbody>
                  {sensorData.map((sensor, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {sensor.day}
                      </td>
                      <td className="px-6 py-4">{sensor.time}</td>
                      <td className={`px-6 py-4 ${getSuhuColorClass(sensor.temperature)}`}>
                        {sensor.temperature || "Loading..."}°C
                      </td>
                      <td className="px-6 py-4">{sensor.soil_moisture || "Loading..."}</td>
                      <td className="px-6 py-4">{sensor.humidity || "Loading..."} RH</td>
                      <td className="px-6 py-4">{sensor.intensitas_cahaya || "Loading..."}</td>
                      <td className="px-6 py-4">{sensor.coordinate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
