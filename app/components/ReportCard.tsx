"use client";

import Navbar from "@/app/components/Navbar";
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

const ReportCard = async ({ report }: { report: Report }) => {
    return (
        
        <Link key={report._id} href={'/'}>
          <div className="card w-96 bg-base-100 shadow-xl hover:bg-gray-200">
            {/* <figure>
              <img
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg"
                alt="Shoes"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title">
                {report.roomName}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>ผู้แจ้ง: {report.studentId}</p>
              <p>ปัญหาที่พบ: {report.description}</p>
              <p>วันที่พบฟัญหา: {report.date}</p>
              <p>เวลาที่พบปัญหา: {report.time}</p>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">creative</div>
                <div className="badge badge-outline">knineZ</div>
              </div> */}
            </div>
          </div>
        </Link>
   
 
    // <div>dd</div>
  );
    
}
export default ReportCard;