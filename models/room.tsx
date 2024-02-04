import mongoose,{Schema} from "mongoose";

const roomSchema = new Schema(
    {
        name: String,
        description: String,
    },{
        timestamps:true,
    }
);

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema)

export default Room;