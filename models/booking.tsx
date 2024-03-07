import mongoose,{Schema} from "mongoose";

const bookingSchema = new Schema(
    {
        studentId: String,
        studentName: String,
        tel: String,
        date: Date,
        time: String,
    },{
        timestamps:true,
    }
);

const Booking = mongoose.models.Room || mongoose.model("Room", bookingSchema)

export default Booking;