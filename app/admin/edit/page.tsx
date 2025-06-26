"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";

interface Room {
  _id: string;
  name: string;
  description: string;
}

const EditPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room`, {
    next: { revalidate: 10 },
  });
  const posts: Room[] = await res.json();
  

    async function deleteRoom(roomId: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room/` + roomId, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete room");
      }

     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room`
    );
    } catch (error) {
      console.error("Error deleting room:", error);
      // Handle error, show a message, etc.
    }
  }

  return (
<div className="min-h-screen bg-gray-50 py-8 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">จัดการห้อง</h1>
        <p className="text-gray-600">แก้ไขข้อมูลห้องที่มีอยู่ในระบบ</p>
      </div>
    </div>

    {/* Table Section */}
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">รายการห้องทั้งหมด</h2>
        <p className="text-sm text-gray-600 mt-1">จำนวน {posts.length} ห้อง</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                ลำดับ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                ชื่อห้อง
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((item, i) => {
              return (
                <tr key={item._id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {i + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`/admin/edit/${item._id}`}>
                      <button className=" mx-2 inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        แก้ไข
                      </button>
                        <button onClick={() => deleteRoom(item._id)} className=" mx-2 inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        ลบ
                      </button>
                    </Link>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>

         <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully deleted!!!</h3>
          <p className="py-4">This room has been deleted.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => window.location.reload()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
      </div>
      
      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">ไม่มีห้องในระบบ</h3>
          <p className="text-gray-500">เริ่มต้นด้วยการสร้างห้องใหม่</p>
        </div>
      )}
    </div>

    {/* Back Button */}
    <div className="mt-8 text-center">
      <Link href={"/admin"}>
        <button className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
};

export default EditPage;
