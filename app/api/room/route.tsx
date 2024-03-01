import connectMongoDB from "@/lib/mongodb";
import Room from "@/models/room";
import { NextResponse } from "next/server";


// create room api
export async function POST(request:Request) {
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");

    await connectMongoDB();
    await Room.create({name,description});
    
    return NextResponse.json({message:"Room created"},{status:201});
} 

// get all room api
export async function GET(){
    await connectMongoDB();
    const response = await Room.find();
    return NextResponse.json(response);
}

