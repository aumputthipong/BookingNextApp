import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";

const Console = () => {
  return (
    <div className="grid grid-cols-5 gap-4 bg-red-100 p-9">
      <Link href={"/admin/create"}>
        <button className="btn h-60 w-60 text-2xl">
          <FaPlus />
          สร้าง
        </button>
      </Link>

      <Link href={"/admin/edit"}>
      <button className="btn h-60 w-60 text-2xl">
        <FaEdit />
        แก้ไข
      </button>
      </Link>

      <Link href={"/admin/delete"}>
      <button className="btn h-60 w-60 text-2xl">
        <MdDelete />
        ลบ
      </button>
      </Link>

      <button className="btn h-60 w-60 text-2xl">
        <AiFillTool />
        จัดการห้อง
      </button>

      <button className="btn h-60 w-60 text-2xl">
        <RiFeedbackFill />
        ปัญหาที่แจ้ง
      </button>
    </div>
  );
};

export default Console;
