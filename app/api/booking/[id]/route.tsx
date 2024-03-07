import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import { NextResponse, } from "next/server";




export async function GET(request: Request){

  const roomId = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Booking.findById({roomId})
  
    return NextResponse.json(res);
  }
// // update api
// export async function PUT(request: Request ){
//     const id = request.url.slice(request.url.lastIndexOf('/')+1)
//     const{name,description}= await request.json();
//     await connectMongoDB();
//     const response = await Booking.findByIdAndUpdate(id,{name,description})
//     return NextResponse.json({message:"Room updated"},{status:201});
// }



// // update api
// export async function DELETE(request: Request ){
//     const id = request.url.slice(request.url.lastIndexOf('/')+1)
//     await connectMongoDB();
//     const response = await Booking.findByIdAndDelete(id)
//     return NextResponse.json({message:"Room deleted"},{status:201});
// }