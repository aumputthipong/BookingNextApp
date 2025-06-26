"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";

const Console = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
   <section className="w-full flex justify-center items-center min-h-screen bg-gray-50 p-4">
  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl w-full border border-gray-200">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h2>
      <p className="text-gray-600">จัดการระบบและข้อมูล</p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <Link href={"/admin/create"}>
        <button className="group w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-blue-300">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300">
              <FaPlus className="text-3xl" />
            </div>
            <span className="text-xl font-semibold">สร้าง</span>
            <span className="text-sm opacity-90">เพิ่มข้อมูลใหม่</span>
          </div>
        </button>
      </Link>

      <Link href={"/admin/edit"}>
        <button className="group w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-green-300">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300">
              <FaEdit className="text-3xl" />
            </div>
            <span className="text-xl font-semibold">แก้ไข</span>
            <span className="text-sm opacity-90">จัดการข้อมูล</span>
          </div>
        </button>
      </Link>

  

      <Link href={"/admin/report"}>
        <button className="group w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-purple-300">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300">
              <RiFeedbackFill className="text-3xl" />
            </div>
            <span className="text-xl font-semibold">ปัญหาที่แจ้ง</span>
            <span className="text-sm opacity-90">ตรวจสอบรายงาน</span>
          </div>
        </button>
      </Link>
    </div>
  </div>
</section>
  );
};

export default Console;
