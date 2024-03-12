"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface Room {
  _id: string;
  name: string;
  description: string;
}

const DeletePage = () => {
  useEffect(() => {
    fetchRooms();
  }, []);

  async function fetchRooms() {
    try {
      const res = await fetch("http://localhost:3000/api/room");
      const posts: Room[] = await res.json();
      renderRooms(posts);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      // Handle error, show a message, etc.
    }
  }

  function renderRooms(rooms: Room[]) {
    const tableBody = document.getElementById("rooms-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    rooms.forEach((room, index) => {
      const row = document.createElement("tr");

      const indexCell = document.createElement("th");
      indexCell.textContent = (index + 1).toString();
      row.appendChild(indexCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = room.name;
      row.appendChild(nameCell);

      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-error";
      deleteButton.onclick = () => {
        deleteRoom(room._id);
        document.getElementById("delete_modal").showModal();
      };
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    });
  }

  async function deleteRoom(roomId: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/room/` + roomId, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete room");
      }

      fetchRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
      // Handle error, show a message, etc.
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
      {/* <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: '400px' }}> */}
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody id="rooms-table-body"></tbody>
        </table>
      </div>
      <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully deleted!!!</h3>
          <p className="py-4">This room has been deleted.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => window.location.reload()}>
              Close
            </button>
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
