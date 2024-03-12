"use client";

import Navbar from "@/app/components/Navbar";
import ReportCard from "@/app/components/ReportTable";
import Link from "next/link"; 
import React from "react";
import { FormEvent } from "react";

interface Report {
  _id: string;
  studentId: string;
  roomName: string;
  description: string;
  date: string;
  time: string;
}

export default async function Report() {
  const res = await fetch('http://localhost:3000/api/report', {
    next: { revalidate: 10 },
  });
  const reports: Report[] = await res.json();
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-[#002D74]">รายการปัญหาที่ได้รับแจ้ง</h1>
        <br />
        <div className="w-full px-24">
          <table className="min-w-full border-gray-300 w ">
            <thead>
              <tr>
                <th className="py-2 px-4 border ">ชื่อห้อง</th>
                <th className="py-2 px-4 border ">ชื่อผู้แจ้ง</th>
                <th className="py-2 px-4 border ">รายละเอียด</th>
                <th className="py-2 px-4 border ">วัน</th>
                <th className="py-2 px-4 border ">เวลา</th>
              </tr>
            </thead>
            {reports.map((report: any) => (
                <div key={report.__id}>
                <ReportCard report={report} />
              </div>
            ))}
          </table>
        </div>
      </div>
            </>
  );
}
