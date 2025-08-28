"use client";

import React, { useState } from "react";
import Image from "next/image";
import bmr from "../images/bmr.png";
import { useRouter } from "next/navigation"; // 1. Import useRouter

export default function Page() {
  const router = useRouter(); // 2. สร้าง instance ของ router

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmrResult, setBmrResult] = useState("0.00");

  const handleCalculate = () => {
    // 3. เพิ่มการแจ้งเตือนสำหรับแต่ละช่องข้อมูล
    if (!weight || parseFloat(weight) <= 0) {
      alert("กรุณาป้อนน้ำหนักให้ถูกต้อง");
      return;
    }
    if (!height || parseFloat(height) <= 0) {
      alert("กรุณาป้อนส่วนสูงให้ถูกต้อง");
      return;
    }
    if (!age || parseInt(age, 10) <= 0) {
      alert("กรุณาป้อนอายุให้ถูกต้อง");
      return;
    }
    if (!gender) {
      alert("กรุณาเลือกเพศ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age, 10);

    let calculatedBmr = 0;
    if (gender === "male") {
      calculatedBmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else if (gender === "female") {
      calculatedBmr = 10 * w + 6.25 * h - 5 * a - 161;
    }
    setBmrResult(
      calculatedBmr.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const handleClear = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setBmrResult("0.00");
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-emerald-400">
              BMR Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณการเผาผลาญพลังงานพื้นฐาน</p>
          </div>
          <div className="flex justify-center mb-6">
            <Image
              src={bmr}
              alt="Fitness Icon"
              height={100}
              width={100}
              className="rounded-full border-4 border-gray-600 shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                น้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="0.0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                placeholder="0"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                อายุ (ปี)
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="0"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เพศ
              </label>
              <div className="space-y-2">
                <label className="flex items-center bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-700/50 transition duration-200">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    checked={gender === "male"} // 4. ควบคุมการ check จาก state
                    onChange={() => setGender("male")}
                    className="custom-radio form-radio h-5 w-5 text-emerald-500 bg-gray-700 border-gray-500 focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-white">ชาย</span>
                </label>
                <label className="flex items-center bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-700/50 transition duration-200">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    checked={gender === "female"} // 4. ควบคุมการ check จาก state
                    onChange={() => setGender("female")}
                    className="custom-radio form-radio h-5 w-5 text-emerald-500 bg-gray-700 border-gray-500 focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-white">หญิง</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <button
              onClick={handleCalculate}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              คำนวณ BMR
            </button>
            <button
              onClick={handleClear}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ล้างข้อมูล
            </button>
            {/* 5. เพิ่มปุ่มย้อนกลับ */}
            <button
              onClick={() => router.back()}
              className="w-full bg-transparent hover:bg-gray-700 border border-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ย้อนกลับ
            </button>
          </div>
          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ค่า BMR ที่คำนวณได้{" "}
              <span className="text-2xl text-emerald-300 font-bold">
                {bmrResult}
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
