import connectMongoDB from "@/lib/mongodb";
import Room from "@/models/room";
import { NextResponse, } from "next/server";


export async function GET(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Room.findById(id)
    return NextResponse.json({res});
  
}