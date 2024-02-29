import Navbar from '@/app/components/Navbar'
import React from 'react'

const CreatePage = () => {
  return (
    <div>
    
      <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            ชื่อห้อง
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="text"/>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            รายละเอียด
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="text"/>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            จำนวนคนแนะนำต่อห้อง
          </label>
          <input className="input input-bordered w-24 md:w-auto" id="grid-first-name" type="text"/>
        </div>

        <button className="btn bg-blue-400">
          สร้าง
        </button>
      </div>
    </form></div>
  )
}

export default CreatePage