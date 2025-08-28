"use client";
import React from "react";
import Image from "next/image";
import car from "../images/car.png";
export default function Page() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* <!-- Car Installment Calculator Card --> */}
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
          {/* <!-- Header --> */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
              Car Installment Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณค่างวดรถยนต์</p>
          </div>

          {/* <!-- Image --> */}
          <div className="flex justify-center mb-6">
            <Image
              src={car}
              alt="Car Icon"
              height={100}
              width={100}
              className="rounded-full border-4 border-gray-600 shadow-lg"
            />
          </div>

          {/* <!-- Form Fields --> */}
          <div className="space-y-4">
            {/* <!-- Name Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ชื่อผู้คำนวณ
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ระบุชื่อ"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Car Price Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ราคารถ (บาท)
              </label>
              <input
                type="number"
                id="car-price"
                name="car-price"
                placeholder="0.00"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Interest Rate Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ดอกเบี้ยต่อปี (%)
              </label>
              <input
                type="number"
                id="interest-rate"
                name="interest-rate"
                placeholder="0.0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Down Payment Selection --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                เงินดาวน์ (%)
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  เงินดาวน์ (%)
                </label>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="down15"
                      name="down-payment"
                      value="15"
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                      checked
                    />
                    <span className="ml-2 text-gray-300">15%</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="down20"
                      name="down-payment"
                      value="20"
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                    />
                    <span className="ml-2 text-gray-300">20%</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="down25"
                      name="down-payment"
                      value="25"
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                    />
                    <span className="ml-2 text-gray-300">25%</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="down30"
                      name="down-payment"
                      value="30"
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                    />
                    <span className="ml-2 text-gray-300">30%</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      id="down35"
                      name="down-payment"
                      value="35"
                      className="h-4 w-4 text-indigo-500 bg-gray-700 border-gray-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                    />
                    <span className="ml-2 text-gray-300">35%</span>
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- Loan Term Selection --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                จำนวนเดือนที่ผ่อน
              </label>
              <select
                id="months"
                name="months"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
              >
                <option>6 เดือน</option>
                <option>12 เดือน</option>
                <option selected>24 เดือน</option>
              </select>
            </div>
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="mt-8 space-y-3">
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              คำนวณ
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              ล้างข้อมูล
            </button>
          </div>

          {/* <!-- Result Display --> */}
          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ยอดผ่อนต่อเดือน{" "}
              <span className="text-2xl text-indigo-300 font-bold">0.00</span>{" "}
              บาท
            </p>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">Dev By Adisorn SAU Team</p>
        </div>
      </div>
    </div>
  );
}
