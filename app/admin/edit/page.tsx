"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";

interface Room {
  _id: string;
  name: string;
  description: string;
}

const EditPage = async () => {
  const res = await fetch("http://localhost:3000/api/room", {
    next: { revalidate: 10 },
  });
  const posts: Room[] = await res.json();
  
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
      {/* <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: '400px' }}> */}
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <Link key={item._id} href={`/admin/edit/${item._id}`}>
                      <button
                        className="btn btn-info"
                      >
                        edit
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="label"></div>
      <Link href={"/admin"}>
        <button className="btn btn-warning">Back to console</button>
      </Link>
    </div>
  );
};

export default EditPage;
