"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { FormEvent } from "react";

interface Report {
  _id: string;
  studentId: string;
  roomName: string;
  reporterName:String;
  description: string;
  date: string;
  time: string;
}

const ReportCard = async ({ report }: { report: Report }) => {
  return (
    <div key={report._id}>
      <tbody>
  
          <tr key={report._id}>
            <td className="py-2 px-4 border">{report.roomName}</td>
            <td className="py-2 px-4 border">{report.reporterName}</td>
            <td className="py-2 px-4 border">{report.description}</td>
            <td className="py-2 px-4 border">{new Date(report.date).toLocaleDateString()}</td>
            <td className="py-2 px-4 border">{report.time} น.</td>
          </tr>
      </tbody>
    </div>
  );
};
export default ReportCard;
