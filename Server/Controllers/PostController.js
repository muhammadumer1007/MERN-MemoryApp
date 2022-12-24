import express from "express";
import postPosts from "../Modals/postModals.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postPosts.find()
        res.status(200).json(postMessages)
        console.log('success');
    } catch (error) {
        res.status(404).json({ message: error.message })
           console.log('error');
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postPosts(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
        console.log('success create');
    } catch (error) {
        res.status(409).json({ message: error.message })
        console.log('error');
    }
}