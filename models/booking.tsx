import mongoose,{Schema} from "mongoose";

const bookingSchema = new Schema(
    {
        roomId: String,
        studentId: String,
        studentName: String,
        tel: String,
        date: Date,
        timeStart: String,
        timeEnd: String,
    },{
        timestamps:true,
    }
);

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)

export default Booking;