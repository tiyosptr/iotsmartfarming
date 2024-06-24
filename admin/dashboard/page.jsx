import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

        
        </div>
      </header>

      {/* konten */}
      <div className="flex flex-1">
        {/* sidebar */}
        <aside className="w-64 bg-gray-800 h-full">
          <div className="flex items-center justify-center h-16 text-white text-xl font-semibold">
            Dashboard
          </div>
          <nav className="mt-5">
            <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Dashboard</a>
            {/* <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">User</a>
            <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">data</a>
            <a href="#" className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Reports</a> */}
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

          {/* Example Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-gray-300 shadow-md rounded-md">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {/* Example rows */}
                {Array.from(Array(10).keys()).map((index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">User {index + 1}</td>
                    <td className="py-3 px-6 text-left">{`user${index + 1}@example.com`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
