const cloudinary = require("cloudinary").v2
const asyncHandler = require("express-async-handler")


cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: ""
})

const uploadMultipleFile = asyncHandler(async (req, res, next) => {
  try {
    if(req.files === undefined){
      return res.status(404).json({msg:"file not found"})
    }
    
    const images = req.files.images || [];
    const videos = req.files.videos || [];

    // For images upload...
    if (images.length > 0) {
      const imageURL = [];
      for (const image of images) {
        const res = await cloudinary.uploader.upload(image.path, { resource_type: "auto" })
        imageURL.push(res.secure_url)
      }
      req.images = imageURL
    }

    // for videos upload ...
    if (videos.length > 0) {
      const videoURL = [];
      for (const video of videos) {
        const res = await cloudinary.uploader.upload(video.path, { resource_type: "auto" })
        videoURL.push(res.secure_url)
      }
      req.videos = videoURL
    }

    next();
  }
  catch (error) {
    res.status(500).json({ message: "internal error in uploadMultipleFile.js" })
  }
})

module.exports = uploadMultipleFile