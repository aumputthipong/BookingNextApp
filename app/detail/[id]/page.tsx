"use client";
import React, { useState, useEffect } from "react";
import MyCalendar from "@/app/components/MyCalendar";
import Clock from "react-live-clock";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { RiMegaphoneLine } from "react-icons/ri";
interface Booking {
  _id: string;
  roomId: string;
  studentName: string;
  tel: string;
  date: Date;
  timeStart: string;
  timeEnd: string;
  reason: string;
}

const DetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { data: session, status } = useSession();
  const CurrentUserId = session?.user.id;
  const [room, setRoom] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date().toDateString())
  );
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    userId: CurrentUserId,
    tel: "",
    reason: "",
    date: "",
    timeStart: "",
    timeEnd: "",
  });

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room/${params.id}`);
      const data = await res.json();
      setRoom(data);
    };

    const fetchBookings = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/booking/${params.id}`);
      const data = await res.json();
      setBookings(data);
    };

    fetchRoom();
    fetchBookings();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/booking/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      setFormData({
        studentId: "",
        studentName: "",
        userId: CurrentUserId,
        tel: "",
        reason: "",
        date: "",
        timeStart: "",
        timeEnd: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDateClick = (selectedDateString: Date) => {
    // Handle the selected date in the parent component
    console.log(
      "Selected date in parent:",
      // setSelectedDate(selectedDateString)
      setSelectedDate(formatDate(selectedDateString.toDateString()))
    );
  };

  function formatDate(inputDate: string): string {
    // Create a new Date object for the current date
    const dateObject = new Date(inputDate);

    // Define options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    // Format the current date using the options
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    return formattedDate;
  }
  return (
    <div className="bg-zinc-100">
     {/*  -------------------------------- ปฎิทิน -------------------------------------------*/}
      <div className="flex my-6 ">
        <div className="bg-gradient-to-br bg-white  to-blue-50 shadow-2xl border border-blue-100 rounded-2xl mx-2 p-8 w-full flex grid-cols-1 hover:shadow-3xl transition-all duration-300">
          <div className="mx-20">
            <MyCalendar onDateClick={handleDateClick} />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">

          <h2 className="text-2xl font-bold text-gray-800">เวลาตอนนี้:</h2>
        </div>
        
        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md border-2 border-blue-500">
          <Clock
            format={"h:mm:ssa"}
            style={{ fontSize: "1.3em", fontWeight: "600" }}
            ticking={true}
            className="font-mono"
          />
        </div>
        
      </div>
              {/*  -------------------------------- ส่วนตารางงาน  --------------------------------------- */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <table className="table w-full">
                  <thead className=" bg-blue-600 rounded-full  text-white">
                    <tr>
                      <th className="p-4 text-center font-semibold">#</th>
                      <th className="p-4 text-center font-semibold">ชื่อผู้จอง</th>
                      <th className="p-4 text-center font-semibold">เวลาเริ่ม</th>
                      <th className="p-4 text-center font-semibold">เวลาสิ้นสุด</th>
                      <th className="p-4 text-center font-semibold">เหตุผล</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings
                      .filter((booking: any) => {
                        const bookingDate = new Date(booking.date).toDateString();
                        const today = new Date().toDateString();
                        return formatDate(bookingDate) == selectedDate;
                      })
                      .map((booking: any, index: number) => (
                        <tr key={booking.id} className="hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100">
                          <td className="p-4 text-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                              {index + 1}
                            </span>
                          </td>
                          <td className="p-4 text-center font-medium text-gray-800">{booking.studentName}</td>
                          <td className="p-4 text-center">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {booking.timeStart} น.
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {booking.timeEnd} น.
                            </span>
                          </td>
                          <td className="p-4 text-center text-gray-600">{booking.reason}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {bookings.filter((booking: any) => {
                  const bookingDate = new Date(booking.date).toDateString();
                  return formatDate(bookingDate) == selectedDate;
                }).length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-lg">ไม่มีการจองในวันที่เลือก</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-6 gap-4">
        {/* Room Information Section */}
        <div className="bg-gradient-to-br bg-white shadow-2xl border border-green-100 w-3/5 rounded-2xl mx-1 p-8 hover:shadow-3xl transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {room?.name}
              </h1>
            </div>
            <Link href={`/report/${params.id}`}>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <RiMegaphoneLine className="text-lg" />
                แจ้งปัญหา
              </button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-gray-800">รายละเอียด:</span> {room?.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 flex items-center">
              <span className="text-2xl mr-3">📋</span>
              ข้อควรปฎิบัติ:
            </h2>
            <ul className="space-y-3">
              {[
                "นักศึกษาจองห้องใช้ห้องได้ไม่เกิน 2 ชม./ครั้ง",
                "จำนวนต่อการใช้ห้อง ไม่เกิน 10 คน/ห้อง", 
                "ทุกห้องจะเปิดให้บริการทุกวันจันทร์ ถึง ศุกร์ ตั้งแต่เวลา 8.00-19.00 น.",
                "ใช้งานได้เฉพาะห้องที่ได้ทำการจองไว้เท่านั้น",
                "ทำการจองห้องก่อนใช้งาน 1 วัน",
                "รักษาความสะอาดของห้อง",
                "หากพบปัญหาสามารถกดแจ้งปัญหาพร้อมระบุปัญหาที่พบเจอได้",
                "ไม่ส่งเสียงดังรบกวนห้องอื่น"
              ].map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="bg-gradient-to-br bg-white  border-purple-100 w-2/5 rounded-2xl mx-1 p-8 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              แบบฟอร์มสำหรับการจอง
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                
                รหัสนักศึกษา
              </label>
              <input
                type="string"
                maxLength={8}
                value={formData.studentId}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                name="studentId"
                placeholder="กรอกรหัสนักศึกษา"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                
                ชื่อผู้จอง
              </label>
              <input
                type="string"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                name="studentName"
                placeholder="กรอกชื่อ-นามสกุล"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                
                เบอร์โทร
              </label>
              <input
                type="string"
                maxLength={10}
                value={formData.tel}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                name="tel"
                placeholder="กรอกเบอร์โทรศัพท์"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                
                เหตุผลการเข้าใช้
              </label>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white h-24 resize-none"
                value={formData.reason}
                onChange={handleChange}
                name="reason"
                placeholder="กรอกเหตุผลการใช้ห้อง"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
                
                วันที่
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                name="date"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-4 flex items-center">
                
                เวลาที่ต้องการจอง
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    เวลาเริ่ม
                  </label>
                  <input
                    type="time"
                    value={formData.timeStart}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    name="timeStart"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    เวลาสิ้นสุด
                  </label>
                  <input
                    type="time"
                    value={formData.timeEnd}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    name="timeEnd"
                    required
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r bg-blue-600   hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
        
              จอง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
