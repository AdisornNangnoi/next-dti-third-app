"use client";

import { useState } from "react";
import Image from "next/image";
import moneyShare from "../images/money.png";
import { useRouter } from "next/navigation"; // 1. Import useRouter

export default function Page() {
  const router = useRouter(); // 2. สร้าง instance ของ router
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [moneyResult, setMoneyResult] = useState("0.00");

  const handleCalClick = () => {
    // แปลง string เป็น number ก่อนเปรียบเทียบ
    const moneyNum = parseFloat(money);
    const peopleNum = parseInt(people, 10);

    if (isNaN(moneyNum) || moneyNum <= 0) {
      alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
    } else if (isNaN(peopleNum) || peopleNum <= 0) {
      alert("กรุณากรอกจำนวนคนให้ถูกต้อง");
    } else {
      const result = moneyNum / peopleNum;
      setMoneyResult(
        result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    }
  };
  const handleCancelClick = () => {
    setMoney("");
    setPeople("");
    setMoneyResult("0.00");
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-cyan-400">
              Money Share Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณเงินที่ต้องหารกัน</p>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src={moneyShare}
              alt="Money Icon"
              className="rounded-full border-4 border-gray-600 shadow-lg"
              height={100}
              width={100}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ป้อนจำนวนเงิน (บาท)
              </label>
              <input
                type="number"
                id="amount"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
                name="amount"
                placeholder="0.00"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ป้อนจำนวนคน
              </label>
              <input
                type="number"
                id="people"
                name="people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition duration-200"
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={handleCalClick}
            >
              คำนวณ
            </button>
            <button
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={handleCancelClick}
            >
              ล้างข้อมูล
            </button>
            {/* 3. เพิ่มปุ่มย้อนกลับและเรียกใช้ router.back() */}
            <button
              className="w-full bg-transparent hover:bg-gray-700 border border-gray-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => router.back()}
            >
              ย้อนกลับ
            </button>
          </div>

          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              หารกันคนละ{" "}
              <span className="text-2xl text-cyan-300 font-bold">
                {moneyResult}
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
