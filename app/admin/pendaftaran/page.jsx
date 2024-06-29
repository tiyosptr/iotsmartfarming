import React from "react";
import Link from "next/link"; 
import Head from "next/head";

export default function Pendaftaran() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 h-full text-white">
        <div className="flex items-center justify-center h-16 text-xl font-semibold">
          Pendaftaran
        </div>
        <nav className="mt-5">
          <Link href="admin/dashboard">
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
        </Head>

        <h1 className="text-2xl font-bold mb-2">Pendaftaran</h1>
        {/* kiri */}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          {/* kanan */}
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
            </label>
            <div className="mt-1">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Form
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
