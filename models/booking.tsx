import mongoose,{Schema} from "mongoose";

const bookingSchema = new Schema(
    {
        roomId: String,
        userId: String,
        studentId: String,
        studentName: String,
        tel: String,
        reason: String,
        date: Date,
        timeStart: String,
        timeEnd: String,
        
    },{
        timestamps:true,
    }
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)

export default Booking;