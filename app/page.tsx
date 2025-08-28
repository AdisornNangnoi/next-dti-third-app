import calculator from "./images/calculator.png";
import bmi from "./images/bmi.png";
import bmr from "./images/bmr.png";
import money from "./images/money.png";
import car from "./images/car.png";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br flex-col from-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
      <main className="container mx-auto max-w-4xl text-center">
        {/* <!-- Header Section --> */}
        <header className="mb-12">
          {/* <!-- Logo --> */}
          <div className="flex justify-center mb-4">
            <Image src={calculator} alt="" height={120} width={120} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Calculator Varity
          </h1>
          <p className="text-lg text-gray-500 mt-2">เครื่องคำนวณ By DTI-SAU</p>
        </header>

        {/* <!-- Calculator Cards Section --> */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* <!-- Money Share Card --> */}
          <Link
            href="/moneyshare"
            className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Image src={money} alt="" height={100} width={100} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Money Share
            </h3>
            <p className="text-gray-500">คำนวณหารค่าใช้จ่าย</p>
          </Link>

          {/* <!-- BMI Card --> */}
          <Link
            href="/bmi"
            className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <Image src={bmi} alt="" height={100} width={100} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">BMI</h3>
            <p className="text-gray-500">คำนวณดัชนีมวลกาย</p>
          </Link>

          {/* <!-- BMR Card --> */}
          <Link
            href="/bmr"
            className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-full mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
              <Image src={bmr} alt="" height={100} width={100} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">BMR</h3>
            <p className="text-gray-500">คำนวณการเผาผลาญพลังงาน</p>
          </Link>

          {/* <!-- Car Installment Card --> */}
          <Link
            href="/carinstallment"
            className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <Image src={car} alt="" height={100} width={100} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Car Installment
            </h3>
            <p className="text-gray-500">คำนวณผ่อนรถ</p>
          </Link>
        </section>
      </main>
      <footer className="mt-8 text-blue-500 text-center">
        Created By SAU-DTI <br />
        Copyright &copy; 2025 Suouteast Asia University
      </footer>
    </div>
  );
}
