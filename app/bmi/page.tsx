"use client";

import React, { useState } from "react";
import Image from "next/image";
import bmi from "../images/bmi.png";

export default function Page() {
  // 1. สร้าง State สำหรับเก็บค่าน้ำหนัก, ส่วนสูง, และผลลัพธ์
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("0.00"); // State สำหรับแสดงผลใน UI เดิม

  // 2. ฟังก์ชันสำหรับคำนวณ BMI
  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    // ตรวจสอบว่าค่าที่รับมาเป็นตัวเลขที่มากกว่า 0
    if (w > 0 && h > 0) {
      const heightInMeters = h / 100;
      const bmi = w / (heightInMeters * heightInMeters);
      setResult(bmi.toFixed(2)); // อัปเดต state ของผลลัพธ์ให้เป็นค่า BMI
    } else {
      setResult("0.00"); // หากข้อมูลไม่ถูกต้อง ให้กลับเป็น 0.00
    }
  };

  // 3. ฟังก์ชันสำหรับล้างข้อมูล
  const handleClear = () => {
    setWeight("");
    setHeight("");
    setResult("0.00"); // รีเซ็ตผลลัพธ์กลับเป็นค่าเริ่มต้น
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
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
                value={weight} // 4. เชื่อม Input กับ State
                onChange={(e) => setWeight(e.target.value)} // 5. อัปเดต State เมื่อผู้ใช้พิมพ์
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
                value={height} // 4. เชื่อม Input กับ State
                onChange={(e) => setHeight(e.target.value)} // 5. อัปเดต State เมื่อผู้ใช้พิมพ์
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleCalculate} // 6. เรียกใช้ฟังก์ชันคำนวณเมื่อคลิก
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              คำนวณ BMI
            </button>
            <button
              onClick={handleClear} // 6. เรียกใช้ฟังก์ชันล้างข้อมูลเมื่อคลิก
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ล้างข้อมูล
            </button>
          </div>

          {/* */}
          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ค่า BMI ที่คำนวณได้ :{" "}
              <span className="text-2xl text-cyan-300 font-bold">
                {result} {/* 7. แสดงผลลัพธ์จาก State */}
              </span>
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
