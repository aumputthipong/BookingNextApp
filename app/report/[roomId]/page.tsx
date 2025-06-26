"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { FormEvent } from "react";
const CreateReport: React.FC<{ params: { roomId: string } }> = ({ params }) => {
  console.log(params.roomId);
  async function createReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/report/${params.roomId}`,
      {
        method: "POST",
        body: formData,
      }
    );

    // Handle response if necessary
    const data = await response.json();
    // ...
    if (response.ok) {
      document.getElementById("create_modal").showModal();
    } else {
      console.error("Failed to create room");
    }
  }
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-2xl">
    <form className="bg-white rounded-xl shadow-lg p-8 space-y-6" onSubmit={createReport}>
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-[#002D74] mb-2">แจ้งปัญหา</h1>
        <p className="text-gray-600">กรุณากรอกข้อมูลเพื่อแจ้งปัญหาที่พบ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold text-gray-700">รหัสนักศึกษา</span>
            <span className="label-text-alt text-red-500">*</span>
          </div>
          <input
            className="input input-bordered w-full focus:border-[#002D74] focus:outline-none transition-colors"
            type="text"
            name="studentId"
            placeholder="กรอกรหัสนักศึกษา"
            required
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold text-gray-700">ชื่อผู้แจ้ง</span>
            <span className="label-text-alt text-red-500">*</span>
          </div>
          <input
            className="input input-bordered w-full focus:border-[#002D74] focus:outline-none transition-colors"
            type="text"
            name="reporterName"
            placeholder="กรอกชื่อ-นามสกุล"
            required
          />
        </label>
      </div>

      <label className="form-control">
        <div className="label">
          <span className="label-text font-semibold text-gray-700">รายละเอียดปัญหา</span>
          <span className="label-text-alt text-red-500">*</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-32 w-full focus:border-[#002D74] focus:outline-none transition-colors resize-none"
          name="description"
          placeholder="อธิบายปัญหาที่พบอย่างละเอียด..."
          required
        ></textarea>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold text-gray-700">วันที่พบปัญหา</span>
          </div>
          <input
            type="date"
            className="input input-bordered w-full focus:border-[#002D74] focus:outline-none transition-colors"
            name="date"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold text-gray-700">เวลาที่พบปัญหา</span>
          </div>
          <input
            type="time"
            className="input input-bordered w-full focus:border-[#002D74] focus:outline-none transition-colors"
            name="time"
          />
        </label>
      </div>

      <div className="border-t pt-6 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="submit"
            className="btn bg-[#002D74] hover:bg-[#001a4d] text-white border-none px-8 py-3 rounded-lg font-semibold shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            แจ้งปัญหา
          </button>
          
          <Link href={"/"}>
            <button 
              type="button"
              className="btn bg-gray-500 hover:bg-gray-600 text-white border-none px-8 py-3 rounded-lg font-semibold shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              กลับหน้าหลัก
            </button>
          </Link>
        </div>
      </div>
    </form>

    <dialog id="create_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white rounded-xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">แจ้งปัญหาสำเร็จ!</h3>
          <p className="text-gray-600 mb-6">ระบบได้รับรายงานปัญหาของคุณเรียบร้อยแล้ว</p>
        </div>
        <div className="modal-action justify-center">
          <form method="dialog">
            <button 
              className="btn bg-[#002D74] hover:bg-[#001a4d] text-white border-none px-8 rounded-lg"
              onClick={() => window.location.reload()}
            >
              ปิด
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</section>
  );
};

export default CreateReport;
