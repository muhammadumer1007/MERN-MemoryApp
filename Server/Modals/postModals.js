import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFiles: String,
    linkCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postPosts = mongoose.model('postPosts', postSchema)

export default postPosts;