import connectMongoDB from "@/lib/mongodb";
import Report from "@/models/report";
import { NextResponse } from "next/server";


// create room api
export async function POST(request:Request) {
    const formData = await request.formData();
    const studentId = formData.get("studentId");
    const roomName = formData.get("roomName");
    const description = formData.get("description");
    const date = formData.get("date");
    const time = formData.get("time");

    await connectMongoDB();
    await Report.create({studentId,roomName,description,date,time});
    
    return NextResponse.json({message:"Report created"},{status:201});
} 

// get all room api
export async function GET(){
    await connectMongoDB();
    const response = await Report.find();
    return NextResponse.json(response);
}

