import connectMongoDB from "@/lib/mongodb";
import Room from "@/models/room";
import { NextResponse, } from "next/server";

// get by id api
export async function GET(request: Request){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Room.findById(id)
    return NextResponse.json(res);
  
}

// update api
export async function PUT(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const{name,description}= await request.json();
    await connectMongoDB();
    const response = await Room.findByIdAndUpdate(id,{name,description})
    return NextResponse.json({message:"Room updated"},{status:201});
}



// update api
export async function DELETE(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    await connectMongoDB();
    const response = await Room.findByIdAndDelete(id)
    return NextResponse.json({message:"Room deleted"},{status:201});
}