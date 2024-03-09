import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";




export async function GET(request: Request){

  const roomId = request.url.slice(request.url.lastIndexOf('/')+1)
  try {
    const booking = await Booking.findOne({ roomId }); // Use findOne for a single booking

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
  }
