"use client";

import Navbar from "@/app/components/Navbar";
import ReportCard from "@/app/components/ReportCard";
import Link from "next/link";
import React from "react";
import { FormEvent } from "react";

interface Report {
    _id: string;
    studentId: string;
    roomName: string;
    description: string;
    date: string;
    time: string;
  }

  export default async function Report() {
    const res = await fetch('http://localhost:3000/api/report',
  {next:{revalidate:10}});
  const reports: Report[] = await res.json();
  return (
        <section className="flex items-center justify-center">
            <form className="w-full max-w-lg">
                <h1 className="font-bold text-2xl text-[#002D74]">Reported List</h1>
                <br/>
            <div className='grid grid-cols-3 gap-4'>
        {reports.map((report:any)=>(
            <div key={report.__id}>
            <ReportCard report={report}/>
                </div>  
        ))}
        </div>
        </form>
        </section>
        
    )
    }
    

