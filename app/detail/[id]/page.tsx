"use client";
import React, { useState, useEffect } from "react";
import MyCalendar from "@/app/components/MyCalendar";
import AgendaTable from "@/app/components/AgendaTable";
import Clock from 'react-live-clock';

interface Booking {
  _id: string;
  roomId: string;
  studentName: string;
  timeStart: string;
  timeEnd: string;
}

const DetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [room, setRoom] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [bookingError, setBookingError] = useState("");

  const[studentId] = useState('');
  const[studentName] = useState('');
  const[tel] = useState('');
  const[date] = useState('');
  const[timeStart] = useState('');
  const[timeEnd] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await fetch(`http://localhost:3000/api/room/${params.id}`);
      const data = await res.json();
      setRoom(data);
    };

    const fetchBookings = async () => {
      const res = await fetch(`http://localhost:3000/api/booking/`);
      const data = await res.json();
      setBookings(data);
    };

    fetchRoom();
    fetchBookings();
  }, [params.id]);

  // const bookingRoom = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   formData.append("roomId", params.id);

  //   const response = await fetch("http://localhost:3000/api/booking", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (response.ok) {
  //     // Handle success
  //     window.location.href = "/";
  //   } else {
  //     // Handle error
  //     const errorData = await response.json();
  //     setBookingError(errorData.message);
  //   }
  // };

  return (
    <div>
      {/*ส่วนตารางและ ปฎิทิน*/}
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 rounded-md bg-base-100 mx-1 p-6 w-full flex grid-cols-2 ">
          <div className="mx-20">
            <MyCalendar />
          </div>
          <div className="grid grid-cols-3 gap-4">
          <Clock 
          format={'h:mm:ssa'} 
          style={{fontSize: '1.5em'}} 
          ticking={true} /> 
            {/* {book.map((book:any)=>(
            
            <AgendaTable book={book}/>
                
        ))} */}
          </div>
        </div>
      </div>
      <div className="flex grid-cols-2 my-3">
        <div className="border-solid shadow-xl border-2 w-4/5 rounded-md bg-base-100 mx-1 p-6 ">
        <h1 className="text-2xl font-bold">{room?.name}</h1>
          <text className="">{room?.description}</text>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white my-4  ">
            ข้อควรปฎิบัติ:
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>นักศึกษาจองห้องใช้ห้องได้ไม่เกิน 2 ชม./ครั้ง</li>
            <li>จำนวนต่อการใช้ห้อง ไม่เกิน 20 คน/ห้อง</li>
            <li>ไม่ส่งเสียงดังรบกวนห้องอื่น</li>
          </ul>
        </div>
        {/* column2 */}

        <div className="border-solid shadow-xl border-2 w-2/5 rounded-md bg-base-100 mx-1 p-6 ">
          การจอง
          {/* <form className="col" onSubmit={bookingRoom}> */}
          <form className="col" >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                รหัสนักศึกษา
              </label>
              <input
                type="string"
                className="input input-bordered w-24 md:w-auto"
                name="studentId"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                ชื่อผู้จอง
              </label>
              <input
                type="string"
                className="input input-bordered w-24 md:w-auto"
                name="studentName"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                เบอร์โทร
              </label>
              <input
                type="string"
                className="input input-bordered w-24 md:w-auto"
                name="tel"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                เหตุผลการเข้าใช้
              </label>
              <textarea
                className="textarea  textarea-md w-full max-w-xsarea textarea-bordered h-24"
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
                className="input input-bordered w-36 md:w-auto"
                name="date"
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
                  className="input input-bordered w-24 md:w-auto"
                  name="timeStart"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  เวลาสิ้นสุด
                </label>
                <input
                  type="time"
                  className="input input-bordered w-24 md:w-auto"
                  name="timeEnd"
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
