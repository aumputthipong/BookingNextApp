import connectMongoDB from "@/lib/mongodb";
import Report from "@/models/report";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Room from "@/models/room";
// get by id api
export async function GET(request: Request){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Report.findById(id)
    return NextResponse.json(res);
}

// update report api
export async function PUT(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    
    const formData = await request.formData();
    const studentId = formData.get("studentId");
    const roomName = formData.get("roomName");
    const description = formData.get("description");
    const date = formData.get("date");
    const time = formData.get("time");

    await connectMongoDB();
    const response = await Report.findByIdAndUpdate(id, {studentId, roomName, description, date, time});

    if (!response) {
        return NextResponse.json({ message: "Report not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Report updated" }, { status: 200 });
}

// delete report api
export async function DELETE(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    await connectMongoDB();
    const response = await Report.findByIdAndDelete(id)
    return NextResponse.json({message:"Room deleted"},{status:201});
}

// create report api
export async function POST(request:Request) {
    const roomId = request.url.slice(request.url.lastIndexOf('/')+1)
    const formData = await request.formData();
    const studentId = formData.get("studentId");

    const reporterName = formData.get("reporterName");
    const description = formData.get("description");
    const date = formData.get("date");
    const time = formData.get("time");

    await connectMongoDB();
    const room = await Room.findById(roomId);
    const roomName =room.name
    await Report.create({studentId, roomId,roomName,reporterName,description,date,time});
    
    return NextResponse.json({message:"Report created"},{status:201});
} 