import express from "express";
import mongoose from "mongoose";
import postPosts from "../Modals/postModals.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postPosts.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postPosts(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })

    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedpost = await postPosts.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedpost)
}

export const deletePost = async (req, res) => {
    const { id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id found')

    await postPosts.findByIdAndRemove(id);

    res.json({ message: 'Post Delted successfully!' })
}