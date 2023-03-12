
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: String,
    occupation: String,
    picturePath: String,
    userPicturePath: String,
    description: String,
    likes: { type: Map, off: Boolean },
    comments: { type: Array, default: [] },
}, { timestamps: true });


const Post = mongoose.model('Post', postSchema);

export default Post;