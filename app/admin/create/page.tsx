"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { FormEvent, useEffect } from "react";
const CreatePage = () => {
  async function createRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://54.87.69.57:3000/api/room", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
    if (response.ok) {
      document.getElementById("create_modal").showModal();
    } else {
      console.error("Failed to create room");
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg"
        onSubmit={createRoom}
        style={{ marginBottom: "5%" }}
      >
        <h1 className="text-3xl font-bold text-[#002D74] mb-8">Create Room</h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Room Name</span>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            name="description"
            id="description"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"
            required
          ></textarea>
        </label>
        <div className="label"></div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-20 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Create
          </button>
          <Link href={"/admin"}>
            <button className="px-10 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
              Back to console
            </button>
          </Link>
        </div>
      </form>
      <dialog id="create_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully created!!!</h3>
          <p className="py-4">The room was created successfully.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => window.location.reload()}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default CreatePage;
