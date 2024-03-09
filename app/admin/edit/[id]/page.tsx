"use client";
import React from "react";
import Link from "next/link";
import { FormEvent } from "react";

const EditRoomPage = async ({ params }: { params: { id: string } }) => {
  const roomId = params.id;
  const res = await fetch(`http://localhost:3000/api/room/${roomId}`, {
    next: { revalidate: 10 },
  });
  const room = await res.json();

  async function updateRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const apiUrl = "http://localhost:3000/api/room/";
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("description", description);

    const response = await fetch(`${apiUrl}${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (response.ok) {
      document.getElementById("update_modal").showModal();
    } else {
      console.error("Failed to update room");
    }
  }

  return (
    <section className="flex items-center justify-center">
      <form className="w-full max-w-lg" onSubmit={updateRoom}>
        <h1 className="font-bold text-2xl text-[#002D74]">
          {" "}
          Update {room.name}
        </h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">ชื่อห้อง</span>
          </div>
          <input
            className="input input-bordered w-24 md:w-auto"
            id="grid-first-name"
            type="text"
            name="name"
            value={room.name}
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">รายละเอียด</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            id="grid-first-name"
            name="description"
            required
          >
            {room.description}
          </textarea>
        </label>
        <label className="form-control">
          <div className="label"></div>
          <button
            type="submit"
            className="btn btn-success"
          >
            บันทึกการแก้ไข
          </button>
        </label>
        <div className="label"></div>
        <Link href={"/admin"}>
          <button className="btn btn-warning">Back to console</button>
        </Link>
      </form>
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully updated!!!</h3>
          <p className="py-4">This room has been updated.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => window.location.reload()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default EditRoomPage;
