"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { FormEvent } from "react";
const CreatePage = () => {
  async function createRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:3000/api/room", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }
  return (
    <section className="flex items-center justify-center">
      <form className="w-full max-w-lg" onSubmit={createRoom}>
        <h1 className="font-bold text-2xl text-[#002D74]"> Create Room</h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">ชื่อห้อง</span>
          </div>
          <input
            className="input input-bordered w-24 md:w-auto"
            id="grid-first-name"
            type="text"
            name="name"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            id="grid-first-name"
            name="description"
            required
          ></textarea>
        </label>
        <label className="form-control">
          <div className="label"></div>
          <button type="submit" className="btn btn-success">
            สร้าง
          </button>
        </label>
        <div className="label"></div>
        <Link href={"/admin"}>
          <button className="btn btn-warning">back to consloe</button>
        </Link>
      </form>
    </section>
  );
};

export default CreatePage;
