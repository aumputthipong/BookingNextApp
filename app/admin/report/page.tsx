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
  reporterName:String;
  description: string;
  date: string;
  time: string;
}

export default async function Report() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/report`, {
    next: { revalidate: 10 },
  });
  const reports: Report[] = await res.json();
  return (
  <div className="min-h-screen bg-gray-50 py-8 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#002D74] mb-2">รายการปัญหาที่ได้รับแจ้ง</h1>
        <p className="text-gray-600">ติดตามและจัดการปัญหาที่ผู้ใช้แจ้งเข้ามา</p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
          <span className="text-sm font-medium text-blue-700">
            จำนวนรายงานทั้งหมด: {reports.length} รายการ
          </span>
        </div>
      </div>
    </div>

    {/* Table Section */}
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">รายงานปัญหา</h2>
          <div className="flex items-center space-x-4">
           
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>ชื่อห้อง</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>ชื่อผู้แจ้ง</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>รายละเอียด</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-4 0V3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
                  </svg>
                  <span>วันที่</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>เวลา</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reports.map((report, index) => (
              <tr key={report._id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900">{report.roomName}</div>
                      <div className="text-sm text-gray-500">ห้อง #{index + 1}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-green-700">
                        {report.reporterName ? report.reporterName.charAt(0).toUpperCase() : 'A'}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{report.reporterName}</div>
                      <div className="text-xs text-gray-500">ผู้แจ้ง</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <div className="text-sm text-gray-900 font-medium mb-1">
                      {report.description ? report.description.substring(0, 50) + (report.description.length > 50 ? '...' : '') : 'ไม่มีรายละเอียด'}
                    </div>
                    {report.description && report.description.length > 50 && (
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        อ่านเพิ่มเติม
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-medium">
                    {report.date
      ? new Date(report.date).toLocaleDateString('th-TH', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : new Date().toLocaleDateString('th-TH')}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date().toLocaleDateString('th-TH', { weekday: 'long' })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-medium">
                    {report.time || new Date().toLocaleTimeString('th-TH', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                  <div className="text-xs text-gray-500">น.</div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty State */}
      {reports.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">ไม่มีรายงานปัญหา</h3>
          <p className="text-gray-500">ยังไม่มีผู้ใช้แจ้งปัญหาใดๆ เข้ามาในระบบ</p>
        </div>
      )}
    </div>

    {/* Back Button */}
    <div className="mt-8 text-center">
      <Link href={"/admin"}>
        <button className="inline-flex items-center px-6 py-3 bg-[#002D74] hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          กลับสู่หน้าควบคุม
        </button>
      </Link>
    </div>
  </div>
</div>
  );
}
