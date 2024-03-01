'use client'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import { FormEvent } from 'react'
const CreatePage = () => {

  async function createRoom(event: FormEvent<HTMLFormElement>){

    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://localhost:3000/api/room', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div>  
      <form className="w-full max-w-lg" onSubmit={createRoom}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            ชื่อห้อง
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="text" name="name"/>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            รายละเอียด
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="text"name="description"/>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
            จำนวนคนแนะนำต่อห้อง
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="number" name="number"/>
        </div>

        <button type="submit" className="btn bg-blue-400">
          สร้าง
        </button>
      </div>
    </form></div>
  )
}

export default CreatePage