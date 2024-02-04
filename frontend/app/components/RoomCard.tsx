import React from "react";
import RoomAdd from "./RoomAdd";
import rooms from "../data/dummydata";
import Link from "next/link";
const RoomCard = () => {
  return (
    <>
      {rooms.map((room, index) => (
        <Link href="/detail">
          <div key={room.id} className="card w-96 bg-base-100 shadow-xl hover:bg-gray-200">
            <figure>
              <img
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {room.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>อยากจะรู้ว่าตรงที่เธอยืนนั้น มีฝนตกไหม?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">creative</div>
                <div className="badge badge-outline">knineZ</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RoomCard;
