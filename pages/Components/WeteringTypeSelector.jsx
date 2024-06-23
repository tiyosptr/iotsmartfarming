import React, { useState } from "react";

function WateringTypeSelector({ onBack, onNext }) {
    const [autoWater, setAutoWater] = useState(null);

    const handleYes = () => {
        setAutoWater(true);
    };

    const handleNo = () => {
        setAutoWater(false);
        onNext(false); // Mengirimkan nilai false ke handleNext di Dashboard
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className=" shadow-2xl rounded-lg flex flex-col items-end justify-center p-4">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-80 h-50  overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="img/penyiraman.png"
                            alt="Garden Size"
                            style={{
                                width: "400px",
                                height: "250px",
                                borderRadius: "0%",
                            }}
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-xl font-semibold ">
                            Apakah anda ingin menyiram tanaman secara otomatis?
                        </h1>
                        <button
                            onClick={handleYes}
                            className={`py-2 px-4 rounded-lg ${
                                autoWater === true
                                    ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                    : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                            }`}
                        >
                            Ya
                        </button>
                        <button
                            onClick={handleNo}
                            className={`py-2 px-4 rounded-lg ${
                                autoWater === false
                                    ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                    : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                            }`}
                        >
                            Tidak
                        </button>
                    </div>
                </div>
                <div className="flex space-x-4 mt-5">
                    <button
                        onClick={onBack}
                        className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-red-500 text-gray-700 font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => onNext(autoWater)}
                        className={`py-2 px-4 rounded-lg ${
                            autoWater === null
                                ? "bg-gray-300 text-gray-700 font-medium"
                                : "bg-gray-300 hover:bg-green-500 text-black font-bold"
                        }`}
                        disabled={autoWater === null}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WateringTypeSelector;
