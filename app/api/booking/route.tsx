import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";

export async function POST(request:Request) {
    const{roomId,studentId,studentName,tel,reason,date,timeStart,timeEnd}= await request.json();
    await connectMongoDB();
    await Booking.create({roomId,studentId,studentName,tel,reason,date,timeStart,timeEnd});
    
    return NextResponse.json({message:"Room created"},{status:201});
} 

export async function GET(){
    await connectMongoDB();
    const response = await Booking.find();
    return NextResponse.json(response);
}