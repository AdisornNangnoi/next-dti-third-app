"use client";
import React from "react";
import Image from "next/image";
import bmr from "../images/bmr.png";

export default function Page() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md mx-auto">
        {/* <!-- BMR Calculator Card --> */}
        <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
          {/* <!-- Header --> */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-emerald-400">
              BMR Calculator
            </h1>
            <p className="text-gray-300 mt-1">คำนวณการเผาผลาญพลังงานพื้นฐาน</p>
          </div>

          {/* <!-- Image --> */}
          <div className="flex justify-center mb-6">
            <Image
              src={bmr}
              alt="Fitness Icon"
              height={100}
              width={100}
              className="rounded-full border-4 border-gray-600 shadow-lg"
            />
          </div>

          {/* <!-- Input Fields --> */}
          <div className="space-y-4">
            {/* <!-- Weight Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                น้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="0.0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Height Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                placeholder="0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Age Input --> */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                อายุ (ปี)
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="0"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
              />
            </div>
            {/* <!-- Gender Selection --> */}
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
                    className="custom-radio form-radio h-5 w-5 text-emerald-500 bg-gray-700 border-gray-500 focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-white">ชาย</span>
                </label>
                <label className="flex items-center bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-700/50 transition duration-200">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="custom-radio form-radio h-5 w-5 text-emerald-500 bg-gray-700 border-gray-500 focus:ring-emerald-500"
                  />
                  <span className="ml-3 text-white">หญิง</span>
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="mt-8 space-y-3">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              คำนวณ BMR
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
              ล้างข้อมูล
            </button>
          </div>

          {/* <!-- Result Display --> */}
          <div className="mt-8 text-center bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <p className="text-lg font-semibold text-gray-200">
              ค่า BMR ที่คำนวณได้{" "}
              <span className="text-2xl text-emerald-300 font-bold">0.00</span>
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
