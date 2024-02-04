import connectMongoDB from "@/lib/mongodb";
import Room from "@/models/room";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const{name,description}= await request.json();
    await connectMongoDB();
    await Room.create({name,description});
    return NextResponse.json({message:"Room created"},{status:201});
} 

export async function GET(){
    await connectMongoDB();
    const rooms = await Room.find();
    return NextResponse.json(rooms);
}