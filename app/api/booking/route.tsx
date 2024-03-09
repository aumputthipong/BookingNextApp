import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";

export async function POST(request:Request) {
    const formData = await request.formData();
    const roomId = formData.get("roomId")
    const studentId = formData.get("studentId")
    const studentName = formData.get("studentName");
    const tel = formData.get("tel");
    const reason = formData.get("reason");
    const date = formData.get("date");
    const timeStart = formData.get("timeStart");
    const timeEnd = formData.get("timeEnd");
    await connectMongoDB();
    await Booking.create({roomId,studentId,studentName,tel,date,timeStart,timeEnd});
    
    return NextResponse.json({message:"Room created"},{status:201});
} 

export async function GET(){
    await connectMongoDB();
    const response = await Booking.find();
    return NextResponse.json(response);
}