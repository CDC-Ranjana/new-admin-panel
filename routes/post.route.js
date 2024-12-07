const express = require('express');
const { deletePost, updatePost, getPosts, createPost } = require('../controllers/post.controller');
const upload = require('../middleware/multer');
const uploadMultipleFile = require('../middleware/upload');
const { createNewsBulletine, getNewsBulletine, updateNewsBulletine, deleteNewsBulletine } = require('../controllers/newspost.controller');
const router = express.Router();



//! FOR RECENT ACTIVITIES..... 
router.post('/create-post', upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 5 }]), uploadMultipleFile, createPost);        // Create Post
router.get('/get-posts', getPosts);        // Get All Posts
router.put('/update/:id', upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 5 }]), uploadMultipleFile, updatePost);     // Update Post
router.delete('/delete/:id', deletePost);  // Delete Post






//! FOR NEWS BULLETINE POST .... 
router.post('/create-newspost', upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 5 }]), uploadMultipleFile, createNewsBulletine);        // Create News Post
router.get('/get-newspost', getNewsBulletine);        // Get All News Posts
router.put('/update-news-post/:id', upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 5 }]), uploadMultipleFile, updateNewsBulletine);     // Update News Post
router.delete('/delete-news-post/:id', deleteNewsBulletine);  // Delete News Post



module.exports = router;
