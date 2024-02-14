
import React from "react";
import RoomAdd from "./RoomAdd";
import Link from "next/link";
import roomsdum from "../data/dummydata";

interface Room {
  _id: string;
  name: string;
  description: string;
}


 

const RoomCard = async ({ post }: { post: Room }) => {



  return (
        <Link key={post._id} href={`/detail/${post._id}`}>
          <div className="card w-96 bg-base-100 shadow-xl hover:bg-gray-200">
            <figure>
              <img
                src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {post.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">creative</div>
                <div className="badge badge-outline">knineZ</div>
              </div>
            </div>
          </div>
        </Link>
   
 
    // <div>dd</div>
  );
};


export default RoomCard;
