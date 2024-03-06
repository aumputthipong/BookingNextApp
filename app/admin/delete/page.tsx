"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
// import { FormEvent } from "react";
interface Room {
  _id: string;
  name: string;
  description: string;
}
const DeletePage = async () => {
  const res = await fetch("http://localhost:3000/api/room", {
    next: { revalidate: 10 },
  });
  const posts: Room[] = await res.json();

  async function deleteRoom(roomId: string) {
    try {
      const response = await fetch("http://localhost:3000/api/room/" + roomId, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete room");
      }

      // window.location.href = "/admin";
    } catch (error) {
      console.error("Error deleting room:", error);
      // Handle error, show a message, etc.
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        deleteRoom(item._id);
                        document.getElementById("delete_modal").showModal();
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully deleted!!!</h3>
          <p className="py-4">This room has been deleted.</p>
          <div className="modal-action">
            <Link href={"/admin"}>
              <button className="btn">Close and Back to console</button>
            </Link>
          </div>
        </div>
      </dialog>
      <div className="label"></div>
      <Link href={"/admin"}>
        <button className="btn btn-warning">Back to console</button>
      </Link>
    </div>
  );
};

export default DeletePage;
