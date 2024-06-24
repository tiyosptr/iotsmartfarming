import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Jika Anda akan menavigasi antar halaman

function ImageSelector({ onNext }) {
    const [imageUrl, setImageUrl] = useState("/img/kangkung.png"); // Pastikan path gambar sesuai dengan struktur Next.js
    const [selectedButton, setSelectedButton] = useState(null);

    const changeImage = (newImageUrl, button) => {
        setImageUrl(newImageUrl);
        setSelectedButton(button);
    };

    const handleNextClick = () => {
        if (selectedButton) {
            onNext(selectedButton); // Panggil onNext jika selectedButton tidak null
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-auto shadow-2xl rounded-lg flex items-end justify-center p-6">
                <div className="flex items-center justify-center space-x-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                        <Image
                            src={imageUrl}
                            alt="Selected Plant"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-left text-xl font-semibold mb-4">
                            Tanaman apa yang anda tanam?
                        </h1>
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() =>
                                    changeImage("/img/kangkung.png", "kangkung")
                                }
                                className={`py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${
                                    selectedButton === "kangkung"
                                        ? "bg-green-500 text-black font-bold"
                                        : "bg-gray-300 hover:bg-green-500 text-black font-medium"
                                }`}
                            >
                                Kangkung
                            </button>
                            <button
                                onClick={() =>
                                    changeImage("/img/bayam.jpg", "bayam")
                                }
                                className={`py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${
                                    selectedButton === "bayam"
                                        ? "bg-green-500 text-black font-bold"
                                        : "bg-gray-300 hover:bg-green-500 text-black font-medium"
                                }`}
                            >
                                Bayam
                            </button>
                            <button
                                onClick={() =>
                                    changeImage("/img/cabe.jpg", "cabe")
                                }
                                className={`py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${
                                    selectedButton === "cabe"
                                        ? "bg-green-500 text-black font-bold"
                                        : "bg-gray-300 hover:bg-green-500 text-black font-medium"
                                }`}
                            >
                                Cabe
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-6 ml-60">
                            <button
                                onClick={handleNextClick}
                                className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-green-500"
                                disabled={!selectedButton}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageSelector;
