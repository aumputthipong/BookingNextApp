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
  console.log(selectedDate);
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
      const res = await fetch(`http://localhost:3000/api/room/${params.id}`);
      const data = await res.json();
      setRoom(data);
    };

    const fetchBookings = async () => {
      const res = await fetch(`http://localhost:3000/api/booking/${params.id}`);
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
        `${process.env.NEXT_PUBLIC_HOST}/api/booking/${params.id}`,
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
    <div>
      {/*  -------------------------------- ปฎิทิน -------------------------------------------*/}
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 rounded-md bg-base-100 mx-1 p-6 w-full flex grid-cols-1">
          <div className="mx-20">
            <MyCalendar onDateClick={handleDateClick} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex row">
                <h2 className="text-2xl font-light">เวลาตอนนี้:</h2>
                <Clock
                  format={"h:mm:ssa"}
                  style={{ fontSize: "1.5em" }}
                  ticking={true}
                  className="mx-2"
                />
              </div>
              {/*  -------------------------------- ส่วนตารางงาน  --------------------------------------- */}
              <table className="table mt-5">
                <thead>
                  <tr>
                    <th></th>
                    <th className="p-4 border">ชื่อผู้จอง</th>
                    <th className="p-4 border">เวลาเริ่ม</th>
                    <th className="p-4 border">เวลาสิ้นสุด</th>
                    <th className="p-4 border">เหตุผล</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings
                    .filter((booking: any) => {
                      const bookingDate = new Date(booking.date).toDateString();
                      const today = new Date().toDateString();
                      console.log("bookingDate", formatDate(bookingDate));
                      // console.log("today", formatDate(today));
                      console.log("selectedDate", selectedDate);
                      return formatDate(bookingDate) == selectedDate; // เปรียบเทียบแค่วันที่
                    })
                    .map((booking: any) => (
                      <tr key={booking.id}>
                        <td></td>
                        <td className="p-4 border">{booking.studentName}</td>
                        <td className="p-4 border">{booking.timeStart} น.</td>
                        <td className="p-4 border">{booking.timeEnd} น.</td>
                        <td className="p-4 border">{booking.reason}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 w-4/5 rounded-md bg-base-100 mx-1 p-6 ">
          <div className="flex justify-end mb-4">

            <Link href={`/report/${params.id}`}>
              <button className="btn"><RiMegaphoneLine />แจ้งปัญหา</button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold my-6">{room?.name}</h1>
          <p className="">รายละเอียด: {room?.description}</p>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white my-4">
            ข้อควรปฎิบัติ:
          </h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>นักศึกษาจองห้องใช้ห้องได้ไม่เกิน 2 ชม./ครั้ง</li>
            <li>จำนวนต่อการใช้ห้อง ไม่เกิน 10 คน/ห้อง</li>
            <li>
              ทุกห้องจะเปิดให้บริการทุกวันจันทร์ ถึง ศุกร์ ตั้งแต่เวลา
              8.00-19.00 น.
            </li>
            <li>ใช้งานได้เฉพาะห้องที่ได้ทำการจองไว้เท่านั้น</li>
            <li>ทำการจองห้องก่อนใช้งาน 1 วัน</li>
            <li>รักษาความสะอาดของห้อง</li>
            <li>หากพบปัญหาสามารถกดแจ้งปัญหาพร้อมระบุปัญหาที่พบเจอได้</li>
            <li>ไม่ส่งเสียงดังรบกวนห้องอื่น</li>
          </ul>
        </div>

        {/* column2 */}

        {/* -------------------------------------------Form จองห้อง------------------------------------------------------- */}

        <div className="border-solid shadow-xl border-2 w-2/5 rounded-md bg-base-100 mx-1 p-6 ">
          <h2 className="text-2xl font-bold my-3">แบบฟอร์มสำหรับการจอง</h2>

          <form className="col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                รหัสนักศึกษา
              </label>
              <input
                type="string"
                maxLength={8}
                value={formData.studentId}
                onChange={handleChange}
                className="input input-bordered w-24 md:w-auto"
                name="studentId"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ชื่อผู้จอง
              </label>
              <input
                type="string"
                value={formData.studentName}
                onChange={handleChange}
                className="input input-bordered w-24 md:w-auto"
                name="studentName"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                เบอร์โทร
              </label>
              <input
                type="string"
                maxLength={10}
                value={formData.tel}
                onChange={handleChange}
                className="input input-bordered w-24 md:w-auto"
                name="tel"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                เหตุผลการเข้าใช้
              </label>
              <textarea
                className="textarea  textarea-md w-full max-w-xsarea textarea-bordered h-24"
                value={formData.reason}
                onChange={handleChange}
                id="grid-first-name"
                name="reason"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                วันที่
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered w-36 md:w-auto"
                name="date"
                required
              />
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              เวลาที่ต้องการจอง
            </label>
            <div className="mb-4 flex items-center">
              <div className="mx-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  เวลาเริ่ม
                </label>
                <input
                  type="time"
                  value={formData.timeStart}
                  onChange={handleChange}
                  className="input input-bordered w-24 md:w-auto"
                  name="timeStart"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  เวลาสิ้นสุด
                </label>
                <input
                  type="time"
                  value={formData.timeEnd}
                  onChange={handleChange}
                  className="input input-bordered w-24 md:w-auto"
                  name="timeEnd"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn">
              จอง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
