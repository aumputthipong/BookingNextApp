import connectMongoDB from "@/lib/mongodb";
import Report from "@/models/report";
import { NextResponse, } from "next/server";

// get by id api
export async function GET(request: Request){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Report.findById(id)
    return NextResponse.json(res);
}

// update api
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

// delete api
export async function DELETE(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    await connectMongoDB();
    const response = await Report.findByIdAndDelete(id)
    return NextResponse.json({message:"Room deleted"},{status:201});
}