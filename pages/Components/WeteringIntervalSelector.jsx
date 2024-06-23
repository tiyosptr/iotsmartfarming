import React, { useState } from "react";

function WateringIntervalSelector({ onBack, onSubmit }) {
    const [wateringInterval, setWateringInterval] = useState(null);
    
    
    const handleNext = () => {
        onSubmit(wateringInterval);
    };
    
    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-auto shadow-2xl rounded-lg flex flex-col items-end justify-center p-6">
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
                        <h1 className="text-xl font-semibold mb-4">
                            Berapa jam sekali Anda ingin menyiram?
                        </h1>
                        {[2, 3, 4].map((interval) => (
                            <button
                                key={interval}
                                onClick={() => setWateringInterval(interval)}
                                className={`py-2 px-4 rounded-lg ${
                                    wateringInterval === interval
                                        ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                        : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                                }`}
                            >
                                {interval} Jam Sekali
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={onBack}
                        className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-red-500 text-gray-700 font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-green-500 text-black font-bold"
                        disabled={wateringInterval === null}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </section>
    );
    }

export default WateringIntervalSelector;
