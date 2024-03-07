'use client'
import React from "react";
import MyCalendar from "../../components/MyCalendar";
import AgendaTable from "../../components/AgendaTable";
import { FormEvent } from 'react'


interface Booking {
  _id: string;
  roomId: string;
  studentName: string;
  timeStart: string;
  timeEnd: string;
}


const DetailPage  = async({params}:{params:{id:string}}) => {
  const roomId = params.id
  const res = await fetch(`http://localhost:3000/api/room/${roomId}`,
  {next:{revalidate:10}});

  const res3 = await fetch(`http://localhost:3000/api/booking/`,
  {next:{revalidate:10}});

  const room = await res.json();
  const book: Booking[] = await res3.json();
 
  async function bookingRoom(event: FormEvent<HTMLFormElement>){

    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    formData.append('roomId', roomId);

    const response = await fetch('http://localhost:3000/api/booking', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
    window.location.href = '/';
  }

  return (
    <div>
      <div className="border-solid shadow-xl border-2 my-2 rounded-md bg-base-100 mx-1 p-6">
        Hero Titile Here
      </div>
      <div className="flex grid-cols-2 my-3">
        <div className="border-solid shadow-xl border-2 w-4/5 rounded-md bg-base-100 mx-1 p-6 ">
          <h1 className="text-2xl font-bold">{room.name}</h1>
          <text className="">(คำอธิบายห้อง)</text>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white my-4  ">
            ข้อควรปฎิบัติ:
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>นักศึกษาจองห้องใช้ห้องได้ไม่เกิน 2 ชม./ครั้ง</li>
            <li>จำนวนต่อการใช้ห้อง ไม่เกิน 20 คน/ห้อง</li>
          </ul>
        </div>
        {/* column2 */}
        
        <div className="border-solid shadow-xl border-2 w-2/5 rounded-md bg-base-100 mx-1 p-6 ">
          การจอง
          <form className="col" onSubmit={bookingRoom}>
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
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                วันที่
              </label>
            <input
              type="date"
              className="input input-bordered w-24 md:w-auto"
              name="date"
            />
             </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                เวลาเริ่ม
              </label>
            <input
              type="time"
              className="input input-bordered w-24 md:w-auto"
              name="timeStart"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                เวลาสิ้นสุด
              </label>
            <input
              type="time"
              className="input input-bordered w-24 md:w-auto"
              name="timeEnd"
            />
             </div>
            <button type="submit" className="btn" >
              จอง
            </button>
          </form>
        </div>
      </div>
      {/*ส่วนตารางและ ปฎิทิน*/}
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 rounded-md bg-base-100 mx-1 p-6 w-full flex grid-cols-2 ">
          <div className="mx-20">
            <MyCalendar />
          </div>
          <div className='grid grid-cols-3 gap-4'>
        {book.map((book:any)=>(
            
            <AgendaTable book={book}/>
                
        ))}
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
