// "use server"
import React, { FormEvent } from 'react';


interface BookingFormProps {
    params: { id: string };
    handleBooking: (bookingData: any) => void;
  }

const BookingForm= () => {

 const bookingRoom = async (event: FormEvent<HTMLFormElement>) => {
    console.log("gg")
  // event.preventDefault();

  // const formData = new FormData(event.currentTarget);


  // const response = await fetch("http://localhost:3000/api/booking", {
  //   method: "POST",
  //   body: formData,
  // });

  // if (response.ok) {
  //   console.error("sucess");
  //  // ส่งข้อมูลการจองไปยัง component หลัก
  // } else {
  //   // Handle error
  //   console.error("Failed to book room");
  // }
};
   
  return (
    <div>  {/* <form className="col" onSubmit={bookingRoom}> */}
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
          เหตุผลการเข้าใช้
        </label>
        <textarea
          className="textarea  textarea-md w-full max-w-xsarea textarea-bordered h-24"
          id="grid-first-name"
          name="reason"
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
    </form></div>
  )
}

export default BookingForm