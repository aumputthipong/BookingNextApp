import React from "react";
import RoomAdd from "./RoomAdd";
import Link from "next/link";
import roomsdum from "../data/dummydata";
interface Room {
  id: string;
  name: string;
  description: string;
}

async function getRooms(): Promise<Room[]> {
  const response = await fetch('http://localhost:3000/api/room');
  if (!response.ok) {
    throw new Error('Cannot fetch Rooms');
  }


  return response.json();
}

const RoomCard = async () => {
  const rooms: Room[] = await getRooms();
  console.log('dada:'+rooms);  

  return (
    <>
       {roomsdum.map((room) => (
        <Link href={`/detail${room.id}`}>
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
    // <div>dd</div>
  );
};

export default RoomCard;
