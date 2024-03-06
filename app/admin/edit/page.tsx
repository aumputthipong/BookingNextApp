"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import { FormEvent } from "react";
const EditPage = () => {
  async function createRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:3000/api/room", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }
  return (
    <div>
      <h1>Edit</h1>
      <Link href={"/admin"}>
        <button className="btn btn-warning">back to consloe</button>
      </Link>
    </div>
  );
};

export default EditPage;
