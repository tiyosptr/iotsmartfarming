"use client";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </Head>

      <div className="flex flex-col h-screen">
        <nav className="bg-white">
          <div className="mx-auto max-w-6xl px-2 sm:px-5 lg:px-10">
            <div className="relative flex h-16 items-center justify-center">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-20 sm:block">
                  <div className="flex space-x-4">
                    <Link href="#home">
                      <div>Home</div>
                    </Link>
                    <Link href="#informasi">
                      <div>Informasi</div>
                    </Link>
                    <Link href="#monitoring">
                      <div>Monitoring</div>
                    </Link>
                    <Link href="#contact">
                      <div>Contact</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 justify-end">
                <Link
                  href="auth/login"
                  style={{ backgroundColor: "#D3F8C9" }}
                  className="py-3 inline-flex rounded-2xl  text-black px-5 font-bold"
                >
                  Log in
                </Link>
                <Link
                  href="auth/register"
                  style={{ backgroundColor: "#D3F8C9" }}
                  className="py-3 inline-flex rounded-2xl text-black px-5 font-bold"
                >
                  Register
                </Link>
                </div>
            </div>
          </div>
        </nav>

        <div className="bg-white">
          <div
            id="home"
            className="relative flex h-screen content-center items-center justify-center pt-16 pb-32"
          >
            <div className="absolute top-0 h-full w-full bg-[url('/img/kebun.png')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
              <div className="flex items-center">
                <div className="ml-auto mr-auto w-full text-center lg:w-8/12">
                  <h1 className="lg:text-4xl xl:text-5xl text-white mb-8">
                    TANAM SAYURAN ANDA LAYAKNYA BERMAIN GAME
                  </h1>
                  <h1 className="text-lg font-medium text-white">
                    Teknologi kami memungkinkan Anda untuk memantau tanaman
                    secara langsung, sehingga meningkatkan produktivitas dan
                    memaksimalkan panen dalam praktik pertanian terkini.
                  </h1>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <button
                  style={{ backgroundColor: "#D3F8C9" }}
                  className="py-3 inline-flex rounded-2xl text-black items-center px-7 font-bold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div id="informasi" className="mx-auto mt-24 md:w-5/12 lg:mt-0 mb-8">
            <div>
              <h2 className="text-center font-bold text-2xl mb-8">Informasi</h2>
            </div>
            <div className="flex">
              <div className="relative w-full h-60">
                <img src="/img/lora.png" alt="Lora Image" />
              </div>
              <div>
                <p className="font-medium">
                  Teknologi LoRa memungkinkan kita mengirim data dari sensor
                  tanaman secara nirkabel ke stasiun pusat bahkan di daerah
                  terpencil. Ini menghasilkan pemantauan yang akurat dan andal.
                </p>
              </div>
            </div>
          </div>
          <div id="monitoring" className="mx-auto mt-24 md:w-5/12">
            <div className="flex flex-row-reverse">
              <div className="relative h-50">
                <img src="/img/game.png" alt="Game Image" />
              </div>
              <div>
                <p className="font-medium">
                  Perangkat kami dilengkapi dengan sensor yang dapat mengukur
                  kelembapan tanah, suhu udara, intensitas cahaya, dan
                  kelembapan udara. Memungkinkan Anda membuat keputusan yang
                  tepat untuk merawat tanaman Anda dengan optimal.
                </p>
              </div>
            </div>
          </div>

          <div
            id="monitoring"
            className="relative flex h-screen content-center items-center justify-center pt-16 pb-32"
          >
            <div className="absolute top-0 h-full w-full bg-[url('/img/cabe.jpeg')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-cover bg-center" />
            <div className="max-w-8xl container relative mx-auto">
              <div className="flex items-center">
                <div className="ml-auto mr-auto w-full text-center lg:w-8/12">
                  <div>
                    <h2 className="text-center text-white font-bold text-2xl mb-40">
                      Monitoring
                    </h2>
                  </div>
                  <h1 className="text-2xl font-medium text-white leading-relaxed mb-6">
                    Cabe Atau Cabai merupakan salah satu jenis tanaman dari
                    keluarga Solanaceae tanaman kentang-kentungan. Tanaman cabe
                    memiliki daun hijau dan buah yang umumnya berwarna hijau,
                    merah, kuning, atau ungu, tergantung pada varietasnya. Cabe
                    memiliki rasa pedas karena kandungan senyawa capsaicin yang
                    terdapat di dalamnya. Cabe digunakan sebagai bumbu dapur dan
                    bahan tambahan dalam berbagai hidangan untuk memberikan cita
                    rasa pedas.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="mx-auto w-full mt-12 lg:w-5/12">
            <div>
              <h2 className="text-center text-black font-bold text-2xl mb-8">
                Our Contact
              </h2>
            </div>
            <form className="max-w-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input className="mt-3 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input className="mt-3 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <textarea
                  id="pesan"
                  rows="4"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </form>
          </div>

          <footer className="bg-black text-center py-4">
            <p className="text-white text-sm">
              TILIKEBON. All rights reserved &copy;2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
