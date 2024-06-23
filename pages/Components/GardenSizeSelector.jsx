import React, { useState } from "react";

function GardenSizeSelector({ onNext, onBack }) {
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-auto shadow-2xl rounded-lg flex flex-col items-end justify-center p-6">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-60 h-50  overflow-hidden flex items-center justify-center bg-white">
                    <img
                        src="img/luas.png"
                        alt="Garden Size"
                        style={{
                            width: "400px",
                            height: "250px",
                            borderRadius: "0%",
                        }}
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <h1 className="text-left text-xl font-semibold ">
                        Pilih luas kebun anda?
                    </h1>
                    <button
                        onClick={() => setSelectedSize("3x3")}
                        className={`py-2 px-4 rounded-lg ${
                            selectedSize === "3x3"
                                ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                        }`}
                    >
                        3x3 M
                    </button>
                    <button
                        onClick={() => setSelectedSize("4x4")}
                        className={`py-2 px-4 rounded-lg ${
                            selectedSize === "4x4"
                                ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                        }`}
                    >
                        4x4 M
                    </button>
                    <button
                        onClick={() => setSelectedSize("5x5")}
                        className={`py-2 px-4 rounded-lg ${
                            selectedSize === "5x5"
                                ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                        }`}
                    >
                        5x5 M
                    </button>
                </div>
            </div>
            <div className="flex space-x-4 mt-6 ml-8">
                <button
                    onClick={onBack}
                    className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-red-500 text-gray-700 font-medium"
                >
                    Back
                </button>
                <button
                    onClick={() => onNext(selectedSize)}
                    className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-green-500"
                    disabled={!selectedSize}
                >
                    Next
                </button>
            </div>
        </div>
    </section>
    );
}

export default GardenSizeSelector;
