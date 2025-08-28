"use client";

import React, { useState } from "react";
import Image from "next/image";
import bmi from "../images/bmi.png";
import { useRouter } from "next/navigation"; // 1. Import useRouter

export default function Page() {
  const router = useRouter(); // 2. สร้าง instance ของ router

  // สร้าง State สำหรับเก็บค่าน้ำหนัก, ส่วนสูง, และผลลัพธ์
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("0.00");

  // ฟังก์ชันสำหรับคำนวณ BMI
  const handleCalculate = () => {
    // 3. เพิ่มการแจ้งเตือน
    if (!weight || parseFloat(weight) <= 0) {
      alert("กรุณาป้อนน้ำหนักให้ถูกต้อง");
      return; // หยุดการทำงานถ้าข้อมูลไม่ถูกต้อง
    }
    if (!height || parseFloat(height) <= 0) {
      alert("กรุณาป้อนส่วนสูงให้ถูกต้อง");
      return; // หยุดการทำงานถ้าข้อมูลไม่ถูกต้อง
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    setResult(
      bmi.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  // ฟังก์ชันสำหรับล้างข้อมูล
  const handleClear = () => {
    setWeight("");
    setHeight("");
    setResult("0.00");
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md-p-8 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-cyan-400">
              BMI Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณ BMI</p>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src={bmi}
              alt="BMI Icon"
              className="rounded-full border-4 border-gray-600 shadow-lg"
              height={100}
              width={100}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ป้อนน้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="0.00"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition duration-200"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ป้อนส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="people"
                name="people"
                placeholder="0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition duration-200"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleCalculate}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              คำนวณ BMI
            </button>
            <button
              onClick={handleClear}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ล้างข้อมูล
            </button>
            {/* 4. เพิ่มปุ่มย้อนกลับ */}
            <button
              onClick={() => router.back()}
              className="w-full bg-transparent hover:bg-gray-700 border border-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ย้อนกลับ
            </button>
          </div>

          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ค่า BMI ที่คำนวณได้ :{" "}
              <span className="text-2xl text-cyan-300 font-bold">{result}</span>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">Dev By Adisorn SAU Team</p>
        </div>
      </div>
    </div>
  );
}
