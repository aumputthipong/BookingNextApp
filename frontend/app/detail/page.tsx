import React from "react";
import Navbar from "../components/Navbar";
import MyCalendar from "../components/MyCalendar";
import AgendaTable from "../components/AgendaTable";
const DetailPage = () => {
  return (
    <div>
      <Navbar />
      <div className="border-solid shadow-xl border-2 my-2 rounded-md bg-base-100 mx-1 p-6">
        Hero Titile Here
      </div>
      <div className="flex grid-cols-2 my-3">
        <div className="border-solid shadow-xl border-2 w-4/5 rounded-md bg-base-100 mx-1 p-6 ">
          <h1 className="text-2xl font-bold">Creative Room</h1>
          <text className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
        <div className="border-solid shadow-xl border-2 w-2/5 rounded-md bg-base-100 mx-1 p-6  ">
          ตรงนี้ควรเป็นform ส่งเพื่อจองห้อง?
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
