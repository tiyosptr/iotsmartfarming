import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Cahaya({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Table" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-20 lg:px-20">
                    <p class="text-end">Keterangan</p>
                    <div class="flex justify-end">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl">
                            Dingin
                        </button>
                        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl">
                            Hangat
                        </button>
                        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl">
                            Panas
                        </button>
                    </div>
                    <div class="bg-white overflow-hidden drop shadow-md sm:rounded-2xl">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right dark:text-black rounded-2xl ">
                                <thead class="text-xs text-black uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Jam
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Suhu
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Kelembapan Tanah
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Kelembapan Udara
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Intensitas Cahaya
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Kebutuhan Air Tanaman
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                        >
                                            12.00
                                        </th>
                                        <td class="px-6 py-4">50c</td>
                                        <td class="px-6 py-4">20Rh</td>
                                        <td class="px-6 py-4">100%</td>
                                        <td class="px-6 py-4">4000</td>
                                        <td class="px-6 py-4">
                                            0,2 litter/tanaman
                                        </td>
                                    </tr>
                                    <tr class="bg-white shadow-sm  ">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                        >
                                            14.00
                                        </th>
                                        <td class="px-6 py-4">30c</td>
                                        <td class="px-6 py-4">20Rh</td>
                                        <td class="px-6 py-4">100%</td>
                                        <td class="px-6 py-4">4000</td>
                                        <td class="px-6 py-4">
                                            0,2 litter/tanama
                                        </td>
                                    </tr>
                                    <tr class="bg-white ">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-black  "
                                        >
                                            16.00
                                        </th>
                                        <td class="px-6 py-4">20c</td>
                                        <td class="px-6 py-4">20Rh</td>
                                        <td class="px-6 py-4">100%</td>
                                        <td class="px-6 py-4">4000</td>
                                        <td class="px-6 py-4">
                                            0,2 litter/tanama
                                        </td>
                                    </tr>
                                    <tr class="bg-white ">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-black  "
                                        >
                                            18.00
                                        </th>
                                        <td class="px-6 py-4">30c</td>
                                        <td class="px-6 py-4">20Rh</td>
                                        <td class="px-6 py-4">100%</td>
                                        <td class="px-6 py-4">4000</td>
                                        <td class="px-6 py-4">
                                            0,2 litter/tanama
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}