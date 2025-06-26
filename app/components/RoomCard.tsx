
import React from "react";
import RoomAdd from "./RoomAdd";
import Link from "next/link";
import roomsdum from "../data/dummydata";

interface Room {
  _id: string;
  index: number;
  name: string;
  description: string;
}


 

const RoomCard = ({ post, index }: { post: Room; index: number }) => {

const imageNumber = (index % 5) + 1;
  return (
        <Link key={post._id} href={`/detail/${post._id}`}>
          <div className="card w-96 bg-base-100 shadow-xl hover:bg-gray-200">
            <figure>
              <img
              className="h-64 w-full object-cover"
              src={`/image/room/images (${imageNumber}).jpg`}
                alt={`room${imageNumber}`}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {post.name}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>{post.description}</p>
            </div>
          </div>
        </Link>
   
  );
};


export default RoomCard;
