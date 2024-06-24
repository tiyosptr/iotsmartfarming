import Head from "next/head";

export default function Page({ auth }) {
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
                                        <th className="px-6 py-3">Jam</th>
                                        <th className="px-6 py-3">Suhu</th>
                                        <th className="px-6 py-3">Kelembapan Tanah</th>
                                        <th className="px-6 py-3">Kelembapan Udara</th>
                                        <th className="px-6 py-3">Intensitas Cahaya</th>
                                        <th className="px-6 py-3">Kebutuhan Air Tanaman</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                            12.00
                                        </td>
                                        <td className="px-6 py-4">50°C</td>
                                        <td className="px-6 py-4">20% RH</td>
                                        <td className="px-6 py-4">100%</td>
                                        <td className="px-6 py-4">4000 Lux</td>
                                        <td className="px-6 py-4">
                                            0.2 liter/tanaman
                                        </td>
                                    </tr>
                                    <tr className="bg-white shadow-sm">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                            14.00
                                        </td>
                                        <td className="px-6 py-4">30°C</td>
                                        <td className="px-6 py-4">20% RH</td>
                                        <td className="px-6 py-4">100%</td>
                                        <td className="px-6 py-4">4000 Lux</td>
                                        <td className="px-6 py-4">
                                            0.2 liter/tanaman
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                            16.00
                                        </td>
                                        <td className="px-6 py-4">20°C</td>
                                        <td className="px-6 py-4">20% RH</td>
                                        <td className="px-6 py-4">100%</td>
                                        <td className="px-6 py-4">4000 Lux</td>
                                        <td className="px-6 py-4">
                                            0.2 liter/tanaman
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                            18.00
                                        </td>
                                        <td className="px-6 py-4">30°C</td>
                                        <td className="px-6 py-4">20% RH</td>
                                        <td className="px-6 py-4">100%</td>
                                        <td className="px-6 py-4">4000 Lux</td>
                                        <td className="px-6 py-4">
                                            0.2 liter/tanaman
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
