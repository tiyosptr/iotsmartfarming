"use client";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Fungsi untuk menangani klik pada link navigasi
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1); // Ambil id tujuan dari href
      const targetElement = document.getElementById(targetId); // Cari elemen dengan id yang sesuai
      if (targetElement) {
        // Gulir ke elemen tujuan dengan efek smooth
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    // Menambahkan event listener ke setiap link navigasi
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Membersihkan event listener saat komponen unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </Head>

      <div className="flex flex-col h-screen">
        <header>
          <nav className="sticky-header bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
              <a href="/" className="flex items-center">
                {/* <img src="/img/logo2.png" /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  SmartFarming
                </span>
              </a>
              <div className="flex items-center lg:order-2 space-x-4">
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
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="#home"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b-2 border-transparent 0 lg:p-0 dark:text-gray-400 dark:hover:border-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#informasi"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b-2 border-transparent 0 lg:p-0 dark:text-gray-400 dark:hover:border-white"
                    >
                      Informasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#monitoring"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b-2 border-transparent  lg:p-0 dark:text-gray-400 dark:hover:border-white"
                    >
                      Monitoring
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b-2 border-transparent  lg:p-0 dark:text-gray-400 dark:hover:border-white"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

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
              <img src="/img/lora.png"/>

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
          <div className="mx-auto mt-24 md:w-5/12">
            <div className="flex flex-row-reverse">
            <div className="relative h-96">

                <img src="/img/game.png" 
                      className=" w-full object-cover"
                
                />
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
            <div className="max-w-8xl container relative mx-auto">
              <h2 className="text-center text-black font-bold text-2xl mb-10 lg:mb-12">
                Monitoring
              </h2>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-6/12 mt-8 lg:mt-0">
                  <div className="relative h-96">
                    <img
                      src="/img/monitoring.png"
                      alt="Monitoring Image"
                      className="absolute top-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 lg:px-0">
                  <div className="ml-auto mr-auto text-center lg:text-left">
                    <h1 className="text-xl lg:text-2xl font-medium text-black leading-relaxed mb-6">
                      Perangkat kami dapat diterapkan di berbagai macam jenis
                      tanaman sayur. Perangkat kami dilengkapi dengan sensor
                      yang dapat mengukur kelembapan tanah, suhu udara,
                      intensitas cahaya, dan kelembapan udara, serta mendeteksi
                      pH tanah. Memungkinkan Anda membuat keputusan yang tepat
                      untuk merawat tanaman Anda dengan optimal.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="mx-auto w-full mt-12 lg:w-5/12">
            <div>
              <h2 className="text-center text-black font-bold text-2xl mb-8">
                kontak kami
              </h2>
            </div>
            <form className="mb-6">
              <div className="mb-6">
                {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                <input
                  type="nama"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nama"
                  required
                />
              </div>
              <div className="mb-6">
                {/* <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label> */}
                <input
                  type="text"
                  id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesan"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#D3F8C9" }}
                className="text-black hover:bg-green-300 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
            </form>
          </div>

          
        </div>
      </div>
    </div>
  );
}
