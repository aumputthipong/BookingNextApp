import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";


export async function GET(){
    await connectMongoDB();
    const response = await Booking.find();
    return NextResponse.json(response);
}