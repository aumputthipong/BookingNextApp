import React from 'react'
import Link from "next/link";

interface Booking {
  _id: string;
  roomId: string;
  studentName: string;
  timeStart: string;
  timeEnd: string;
}



const AgendaTable = async ({ book }: { book: Booking }) => {
  // const Datas = [
  //   {name: "name",date:"", startAt:1,endAt:2, reason:""},
  //   {name: "name",date:"", startAt:3,endAt:4, reason:""},
  //   {name: "name",date:"", startAt:5,endAt:6, reason:""},
  //   {name: "name",date:"", startAt:7,endAt:8, reason:""},
  //   {name: "name",date:"", startAt:9,endAt:10, reason:""},
  //   {name: "name",date:"", startAt:11,endAt:12, reason:""},
  // ];
  return (
    <Link key={book._id} href="">
    <div>
          <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ชื่อผู้จอง</th>
        <th></th>
        <th>เวลา</th>
      </tr>
    </thead>
    <tbody>

    <>
      {/* {Datas.map((data, index) => ( */}

          <th></th>
          <td>{book.studentName}</td>
          <td>{`${book.timeStart}:00 pm - ${book.timeEnd}:00pm`}</td>

      ))
      {/* } */}
    </>
    </tbody>
  </table>
    </div>
    </Link>
  )
}

export default AgendaTable