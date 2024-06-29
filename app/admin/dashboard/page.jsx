import Head from "next/head";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
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
          <Link href="admin/pendaftaran">
            <div className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">
              Pendaftaran Alat
            </div>
          </Link>
        </nav>
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
                <th className="py-3 px-6 text-left">Id Alat</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Alamat</th>
                <th className="py-3 px-6 text-left">Nama Alat</th>
              </tr>
            </thead>
            <tbody>
              {/* Contoh baris */}
              {Array.from(Array(10).keys()).map((index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    User {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left">{index + 1001}</td>{" "}
                  {/* Contoh id alat */}
                  <td className="py-3 px-6 text-left">{`user${
                    index + 1
                  }@example.com`}</td>
                  <td className="py-3 px-6 text-left">
                    Alamat User {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left">Nama Alat {index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
