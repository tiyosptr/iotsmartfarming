"use client";
import React, { useState } from "react";
import ImageSelector from '../../components/ImageSelector';
import GardenSizeSelector from "../../components/GardenSizeSelector";
import RowCountSelector from "../../components/RowCountSelector";
import RowPlantSelector from "../../components/RowPlantSelector";
import GenerateData from "../../components/GenerateData";

const getImageUrlFromPlant = (plant) => {
    switch (plant) {
        case "kangkung":
            return "/img/kangkung.png";
        case "bayam":
            return "/img/bayam.jpg";
        case "cabe":
            return "/img/cabe.jpg";
        default:
            return "/img/default.png";
    }
};

function Dashboard({ auth }) {
    const [step, setStep] = useState(1);
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedRowCount, setSelectedRowCount] = useState(null);
    const [plantsPerRow, setPlantsPerRow] = useState(null);
    const [generatedData, setGeneratedData] = useState(null);
    const [dataGenerated, setDataGenerated] = useState(false);
    const [imageUrl, setImageUrl] = useState("/img/kangkung.png");

    const handleNext = (data) => {
        if (dataGenerated) return;
        switch (step) {
            case 1:
                setSelectedPlant(data);
                setImageUrl(getImageUrlFromPlant(data));
                setStep(2);
                break;
            case 2:
                setSelectedSize(data);
                setStep(3);
                break;
            case 3:
                setSelectedRowCount(data);
                setStep(4);
                break;
            default:
                break;
        }
    };

    const handleBack = () => {
        if (dataGenerated) return;
        setStep(step - 1);
    };

    const handleGenerate = (data) => {
        setPlantsPerRow(data);
        generateData();
        setStep(5);
    };

    const generateData = () => {
        const data = {
            selectedPlant,
            selectedSize,
            selectedRowCount,
            plantsPerRow,
        };
        setGeneratedData(data);
        setDataGenerated(true);
    };

    return (
        <div>
            <div className="app-container relative w-full h-screen overflow-hidden">
                <div className={`step absolute w-full h-full transition-transform duration-300 ease-in-out ${step === 1 ? "translate-x-0" : "translate-x-full"}`}>
                    {step === 1 && <ImageSelector onNext={handleNext} />}
                </div>
                <div className={`step absolute w-full h-full transition-transform duration-300 ease-in-out ${step === 2 ? "translate-x-0" : "translate-x-full"}`}>
                    {step === 2 && (
                        <GardenSizeSelector onNext={handleNext} onBack={handleBack} />
                    )}
                </div>
                <div className={`step absolute w-full h-full transition-transform duration-300 ease-in-out ${step === 3 ? "translate-x-0" : "translate-x-full"}`}>
                    {step === 3 && (
                        <RowCountSelector onNext={handleNext} onBack={handleBack} />
                    )}
                </div>
                <div className={`step absolute w-full h-full transition-transform duration-300 ease-in-out ${step === 4 ? "translate-x-0" : "translate-x-full"}`}>
                    {step === 4 && (
                        <RowPlantSelector onGenerate={handleGenerate} onBack={handleBack} />
                    )}
                </div>
                <div className={`step absolute w-full h-full transition-transform duration-300 ease-in-out ${step === 5 ? "translate-x-0" : "translate-x-full"}`}>
                    {step === 5 && dataGenerated && (
                        <GenerateData data={generatedData} imageUrl={imageUrl} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
