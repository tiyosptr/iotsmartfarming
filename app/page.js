"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);


  return (
   <div>
    {data.map((sensorData, index) =>(
      <div key={index}>
        <div>
        {sensorData.humidity}
        </div>
        <div>
        {sensorData.temperature}
        </div>
      </div>
      
    ))}
   </div>
  );
}
