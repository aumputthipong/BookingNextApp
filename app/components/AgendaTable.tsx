import React from 'react'

const Datas = [
    {name: 'Mr. A',date:"", startAt:1,endAt:2, reason:""},
    {name: 'Mr. B',date:"", startAt:3,endAt:4, reason:""},
    {name: 'Mr. C',date:"", startAt:5,endAt:6, reason:""},
    {name: 'Mr. D',date:"", startAt:7,endAt:8, reason:""},
    {name: 'Mr. E',date:"", startAt:9,endAt:10, reason:""},
    {name: 'Mr. F',date:"", startAt:11,endAt:12, reason:""},
  ];

const AgendaTable = () => {
  return (
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
      {Datas.map((data, index) => (
        <tr key={index}>
          <th></th>
          <td>{data.name}</td>
          <td>{data.reason}</td>
          <td>{`${data.startAt}:00 pm - ${data.endAt}:00pm`}</td>
        </tr>
      ))}
    </>
    </tbody>
  </table>
    </div>
  )
}

export default AgendaTable