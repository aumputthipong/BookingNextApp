import React from "react";

import MyCalendar from "../../components/MyCalendar";
import AgendaTable from "../../components/AgendaTable";
import rooms from "@/app/data/dummydata";

 
  // const response = room. 

const response = rooms;
const DetailPage = () => {
  return (
    <div>
     
      <div className="border-solid shadow-xl border-2 my-2 rounded-md bg-base-100 mx-1 p-6">
        Hero Titile Here
      </div>
      <div className="flex grid-cols-2 my-3">
        <div className="border-solid shadow-xl border-2 w-4/5 rounded-md bg-base-100 mx-1 p-6 ">
          <h1 className="text-2xl font-bold">Creative Room</h1>
          <text className="">
            (คำอธิบายห้อง)
          </text>

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
          <form className="col">
          <input type="string" className="input input-bordered w-24 md:w-auto"/>
          <input type="date" value="2017-06-01" className="input input-bordered w-24 md:w-auto" />
          <button className="btn" name="" >จอง</button>
          </form>

        </div>
      </div>
      {/*ส่วนตารางและ ปฎิทิน*/}
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 rounded-md bg-base-100 mx-1 p-6 w-full flex grid-cols-2 ">
          <div className="mx-20"><MyCalendar  /></div>
          <div><AgendaTable /></div>
        </div>
      </div>
      
    </div>
  );
};

export default DetailPage;
