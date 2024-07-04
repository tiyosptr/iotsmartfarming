
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FirebaseConfig from "./FirebaseConfig/FirebaseConfig";
import { collection, onSnapshot, orderBy, query, limit, addDoc, doc,where } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { onAuthStateChanged, signOut } from 'firebase/auth';

function GeneratedData({ data, imageUrl }) {
  const [latestSensorData, setLatestSensorData] = useState(null);
  const firestore = FirebaseConfig().firestore;
  const auth = FirebaseConfig().auth;
  const [user, setUser] = useState(null);
  const router = useRouter();
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

  useEffect(() => {
    // Menggunakan onSnapshot untuk mendapatkan data sensor secara real-time
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "sensor"),
        orderBy("timestamp", "desc"),
        limit(1) // Ambil hanya satu data terbaru
      ),
      (snapshot) => {
        if (!snapshot.empty) {
          const latestData = snapshot.docs[0].data();
          setLatestSensorData(latestData);
        }
      }
    );

    return () => unsubscribe(); // Cleanup function untuk unsubscribe dari snapshot
  }, [firestore]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Check if user has already generated data
        const userDocRef = doc(firestore, "users", user.uid);
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
    <>
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

      <div className="flex flex-row items-start justify-center min-h-screen bg-white mt-20">
        <div className="relative flex flex-col md:flex-row min-w-0 break-words bg-white shadow-xl border-white p-7 drop-shadow-md rounded-2xl mr-10">
          <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 mb-4 md:mb-0 md:mr-7">
            <img
              id="displayed-image"
              src={imageUrl}
              alt="Selected Plant"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="flex flex-col">
            <p className="mt-4">
              <strong>Tanaman:</strong> {data.selectedPlant}
            </p>
            <p className="mt-2">
              <strong>Luas Kebun:</strong> {data.selectedSize} M
            </p>
            <p className="mt-2">
              <strong>Baris Kebun:</strong> {data.selectedRowCount} Baris
            </p>
            <p className="mt-2">
              <strong>Jumlah Tanaman:</strong>{" "}
              {data.selectedRowCount * data.plantsPerRow}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {latestSensorData ? (
            <>
              <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
                <div className="flex flex-col justify-center">
                  <h2 className="font-medium text-center">Suhu</h2>
                  <p className="mt-2 text-center">
                    {latestSensorData.temperature}°C
                  </p>
                </div>
                <div className="flex justify-center ml-5">
                  <img src="img/suhu.png" className="w-20 h-20" />
                </div>
              </div>
              <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
                <div className="flex flex-col justify-center">
                  <h2 className="font-medium text-center">Kelembapan Tanah</h2>
                  <p className="mt-2 text-center">
                    {latestSensorData.soil_moisture}
                  </p>
                </div>
                <div className="flex justify-center ml-4">
                  <img src="img/kelembapan tanah.png" className="w-20 h-20" />
                </div>
              </div>
              <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
                <div className="flex flex-col justify-center">
                  <h2 className="font-medium text-center">Kelembapan Udara</h2>
                  <p className="mt-2 text-center">{latestSensorData.humidity} RH</p>
                </div>
                <div className="flex justify-center ml-4">
                  <img src="img/kelembapan udara.png" className="w-20 h-20" />
                </div>
              </div>

              <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
                <div className="flex flex-col justify-center">
                  <h2 className="font-medium text-center">Intensitas Cahaya</h2>
                  <p className="mt-2 text-center">{latestSensorData.intensitas_cahaya}</p>
                </div>
                <div className="flex justify-center ml-4">
                  <img src="img/intensitas cahaya.png" className="w-20 h-20" />
                </div>
              </div>
              <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
                <div className="flex flex-col justify-center">
                  <h2 className="font-medium text-center">Jumlah air pertanaman</h2>
                  <p className="mt-2 text-center">02</p>
                </div>
                <div className="flex justify-center ml-4">
                  <img src="img/intensitas cahaya.png" className="w-20 h-20" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div
                  style={{ backgroundColor: "#D3F8C9" }}
                  className="rounded-2xl py-2 px-7 text-black"
                >
                  <Link href="/data" className="text-black">
                    Lihat Perjam
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default GeneratedData;
