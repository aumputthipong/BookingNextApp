import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import Room from "@/models/room";
import { NextResponse, } from "next/server";

export async function POST(request:Request) {
    const formData = await request.formData();
    const studentId = formData.get("studentId")
    const studentName = formData.get("studentName");
    const tel = formData.get("tel");
    const date = formData.get("date");
    const time = formData.get("time");

    await connectMongoDB();
    await Booking.create({studentId,studentName,tel,date,time});
    
    return NextResponse.json({message:"Room created"},{status:201});
} 