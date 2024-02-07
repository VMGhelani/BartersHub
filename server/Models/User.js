import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        province: {
            type: String,
            required: true,
            max: 20,
            min: 2
        },
        city: {
            type: String,
            required: true,
            max: 20,
            min: 2
        },
        areaCode: {
            type: Number,
            required: true,
            max: 10,
            min: 2
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }
)


const User = Mongoose.model("User", UserSchema);
export default User;