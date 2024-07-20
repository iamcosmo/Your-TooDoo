import mongoose from "mongoose";
const userdataSchema = mongoose.Schema({
    name: {
      type:String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true, 
      trim: true,  
    },
    password: {
      type: String,
      required: true,
    }
});

const UserDataModel = mongoose.model("UsersData", userdataSchema);
export default UserDataModel;
