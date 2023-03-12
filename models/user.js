import mongoose from "mongoose";



const Schema = mongoose.Schema({
    firstName: {
        type: String,
        min: 3,
        max: 20,
        required: true

    },
    lastName: {
        type: String,
        min: 3,
        max: 20,
        required: true

    },
    email: {
        type: String,
        max: 50,
        required: true,
        unique: true

    },
    picture: {
        type: String,

    },
    picturePath: {
        type: String,
        max: 50,
    },
    friends: {
        type: Array,
        default: [],
        required: true

    },
    location: String,
    occupation: String,
    viewdProfile: Number,
    impressions: Number,

}, { timestamps: true })

const User = mongoose.model("User", Schema)

export default User

