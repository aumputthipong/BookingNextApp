import connectMongoDB from "@/lib/mongodb";
import Report from "@/models/report";
import { NextResponse } from "next/server";




// get report api
export async function GET(){
    await connectMongoDB();
    const response = await Report.find();
    return NextResponse.json(response);
}

