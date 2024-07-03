import React from "react";
import Link from "next/link";

function GeneratedData({ data, imageUrl }) {
  return (
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
        <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center">Suhu</h2>
            <p className="mt-2 text-center">23°C</p>
          </div>
          <div className="flex justify-center ml-5">
            <img src="img/suhu.png" className="w-20 h-20" />
          </div>
        </div>
        <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center">Kelembapan Tanah</h2>
            <p className="mt-2 text-center">23%</p>
           </div>
          <div className="flex justify-center ml-4">
            <img src="img/kelembapan tanah.png" className="w-20 h-20" />
          </div>
        </div>
        <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center">Kelembapan Udara</h2>
            <p className="mt-2 text-center">68.4 RH</p>
          </div>
          <div className="flex justify-center ml-4">
            <img src="img/kelembapan udara.png" className="w-20 h-20" />
          </div>
        </div>
        <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center">pH Tanah</h2>
            <p className="mt-2 text-center">7 pH</p>
          </div>
          <div className="flex justify-center ml-4">
            <img src="img/tanah.png" className="w-20 h-20" />
          </div>
        </div>
        <div className="relative flex flex-row items-center bg-white shadow-xl border-green-200 p-7 drop-shadow-md rounded-2xl">
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-center">Intensitas Cahaya</h2>
            <p className="mt-2 text-center">500 Lux</p>
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
      </div>
    </div>
  );
}

export default GeneratedData;
