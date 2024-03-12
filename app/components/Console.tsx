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
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-slate-400 px-20 py-12 md:w-100 rounded-2xl shadow-lg" style={{ marginBottom: '5%'}}>
        <Link href={"/admin/create"} style={{ marginRight: '20px' }}>
          <button className="btn h-60 w-60 text-2xl">
            <FaPlus />
            สร้าง
          </button>
        </Link>

        <Link href={"/admin/edit"} style={{ marginRight: '20px' }}>
          <button className="btn h-60 w-60 text-2xl">
            <FaEdit />
            แก้ไข
          </button>
        </Link>

        <Link href={"/admin/delete"} style={{ marginRight: '20px' }}>
          <button className="btn h-60 w-60 text-2xl">
            <MdDelete />
            ลบ
          </button>
        </Link>

        {/* <button className="btn h-60 w-60 text-2xl" style={{ marginRight: '20px' }}>
          <AiFillTool />
          จัดการห้อง

        </button> */}

        <Link href={"/admin/report"}>
          <button className="btn h-60 w-60 text-2xl">
            <RiFeedbackFill />
            ปัญหาที่แจ้ง
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Console;
