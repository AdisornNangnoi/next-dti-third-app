"use client";
import React, { useState } from "react";
import Image from "next/image";
import car from "../images/car.png";
import { useRouter } from "next/navigation"; // 1. Import useRouter สำหรับปุ่มย้อนกลับ

export default function Page() {
  const router = useRouter(); // 2. สร้าง instance ของ router

  // 3. สร้าง State สำหรับเก็บข้อมูลจากฟอร์มและผลลัพธ์
  const [name, setName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPayment, setDownPayment] = useState("15"); // ค่าเริ่มต้น 15%
  const [months, setMonths] = useState("24"); // ค่าเริ่มต้น 24 เดือน
  const [monthlyInstallment, setMonthlyInstallment] = useState("0.00");

  // 4. ฟังก์ชันสำหรับคำนวณค่างวด
  const handleCalculate = () => {
    const price = parseFloat(carPrice);
    const interest = parseFloat(interestRate);
    const downPercent = parseFloat(downPayment);
    const termMonths = parseInt(months, 10);

    // ตรวจสอบข้อมูล
    if (price > 0 && interest >= 0 && downPercent >= 0 && termMonths > 0) {
      // คำนวณตามสูตรที่ให้มา
      const downPaymentAmount = price * (downPercent / 100);
      const financeAmount = price - downPaymentAmount; // ยอดจัด
      const totalInterest =
        financeAmount * (interest / 100) * (termMonths / 12); // ดอกเบี้ยทั้งหมด
      const totalPayment = financeAmount + totalInterest;
      const installment = totalPayment / termMonths; // ค่าผ่อนต่อเดือน

      setMonthlyInstallment(
        installment.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    } else {
      setMonthlyInstallment("0.00");
    }
  };

  // 5. ฟังก์ชันสำหรับล้างข้อมูล
  const handleClear = () => {
    setName("");
    setCarPrice("");
    setInterestRate("");
    setDownPayment("15");
    setMonths("24");
    setMonthlyInstallment("0.00");
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
              Car Installment Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณค่างวดรถยนต์</p>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src={car}
              alt="Car Icon"
              height={100}
              width={100}
              className="rounded-full border-4 border-gray-600 shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ชื่อผู้คำนวณ
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ระบุชื่อ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ราคารถ (บาท)
              </label>
              <input
                type="number"
                id="car-price"
                name="car-price"
                placeholder="0.00"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ดอกเบี้ยต่อปี (%)
              </label>
              <input
                type="number"
                id="interest-rate"
                name="interest-rate"
                placeholder="0.0"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เงินดาวน์ (%)
              </label>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                {["15", "20", "25", "30", "35"].map((percent) => (
                  <label
                    key={percent}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="down-payment"
                      value={percent}
                      checked={downPayment === percent}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                    />
                    <span className="ml-2 text-gray-300">{percent}%</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                จำนวนเดือนที่ผ่อน
              </label>
              <select
                id="months"
                name="months"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              >
                <option value="6">6 เดือน</option>
                <option value="12">12 เดือน</option>
                <option value="24">24 เดือน</option>
                <option value="36">36 เดือน</option>
                <option value="48">48 เดือน</option>
                <option value="60">60 เดือน</option>
                <option value="72">72 เดือน</option>
              </select>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleCalculate}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              คำนวณ
            </button>
            <button
              onClick={handleClear}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ล้างข้อมูล
            </button>
            {/* 6. เพิ่มปุ่มย้อนกลับ และเชื่อมต่อกับฟังก์ชัน */}
            <button
              onClick={() => router.back()}
              className="w-full bg-transparent hover:bg-gray-700 border border-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              ย้อนกลับ
            </button>
          </div>

          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ยอดผ่อนต่อเดือน{" "}
              <span className="text-2xl text-indigo-300 font-bold">
                {monthlyInstallment}
              </span>{" "}
              บาท
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
