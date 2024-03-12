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
      `http://localhost:3000/api/report/${params.roomId}`,
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
    <section className="flex items-center justify-center">
      <form className="w-full max-w-lg" onSubmit={createReport}>
        <h1 className="font-bold text-2xl text-[#002D74]">แจ้งปัญหา</h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">รหัสนักศึกษา</span>
          </div>
          <input
            className="input input-bordered w-24 md:w-auto"
            id="grid-first-name"
            type="text"
            name="studentId"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">ชื่อผู้แจ้ง</span>
          </div>
          <input
            className="input input-bordered w-24 md:w-auto"
            id="grid-first-name"
            type="text"
            name="reporterName"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">รายละเอียดปัญหา</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            id="grid-first-name"
            name="description"
            required
          ></textarea>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">วันที่</span>
          </div>
          <input
            type="date"
            className="input input-bordered w-36 md:w-auto"
            name="date"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">เวลาที่พบปัญหา</span>
          </div>
          <input
            type="time"
            className="input input-bordered w-24 md:w-auto"
            name="time"
          />
        </label>
        {/* <label className="form-control">
          <div className="label"></div>
          <button type="submit" className="btn btn-success">
            แจ้งปัญหา
          </button>
        </label> */}
        <div className="label"></div>
        {/* <Link href={"/"}>
          <button className="btn btn-warning">Back to Home</button>
        </Link> */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-20 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            แจ้งปัญหา
          </button>
          <Link href={"/"}>
            <button className="px-14 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
              Back to Home
            </button>
          </Link>
        </div>
      </form>
      <dialog id="create_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully created!!!</h3>
          <p className="py-4">The report was created successfully.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => window.location.reload()}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default CreateReport;
