import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";


export async function POST(request:Request) {
  const roomId = request.url.slice(request.url.lastIndexOf('/')+1)
  const{studentId,studentName,userId,tel,reason,date,timeStart,timeEnd}= await request.json();
  await connectMongoDB();
  await Booking.create({roomId,studentId,userId,studentName,tel,reason,date,timeStart,timeEnd});
  
  return NextResponse.json({message:"Room created"},{status:201});
} 


export async function GET(request: Request){

  const roomId = request.url.slice(request.url.lastIndexOf('/')+1)
  try {
    const booking = await Booking.find({ roomId }); // Use findOne for a single booking

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
  }
