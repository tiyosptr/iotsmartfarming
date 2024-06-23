import React, { useState } from "react";

function RowCountSelector({ onNext, onBack }) {
  const [selectedRowCount, setSelectedRowCount] = useState(null);
  
  
  return (
      <section className="flex items-center justify-center min-h-screen bg-white">
          <div className="w-auto shadow-2xl rounded-lg flex flex-col items-end justify-center p-6">
              <div className="flex items-center space-x-4 mb-4">
                  <div className="w-80 h-50  overflow-hidden flex items-center justify-center bg-white">
                      <img
                          src="img/baris.png"
                          alt="Garden Size"
                          style={{
                              width: "400px",
                              height: "250px",
                              borderRadius: "50%",
                          }}
                      />
                  </div>
                  <div className="flex flex-col space-y-4">
                      <h1 className="text-left text-xl font-semibold ">
                          Berapa baris kebun anda?
                      </h1>
                      {[10, 15, 20].map((count) => (
                          <button
                              key={count}
                              onClick={() => setSelectedRowCount(count)}
                              className={`py-2 px-4 rounded-lg ${
                                  selectedRowCount === count
                                      ? "bg-green-500 hover:bg-green-700 text-black font-bold"
                                      : "bg-gray-300 hover:bg-green-500 text-gray-700 font-medium"
                              }`}
                          >
                              {count} baris
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
                      onClick={() => onNext(selectedRowCount)}
                      className="py-2 px-4 rounded-lg bg-gray-300 hover:bg-green-500 text-black font-bold"
                      disabled={!selectedRowCount}
                  >
                      Next
                  </button>
              </div>
          </div>
      </section>
  );
  }
  
export default RowCountSelector;
