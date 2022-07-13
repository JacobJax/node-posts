const express = require('express')
const router = express.Router()
const Post = require('../Models/Post')

// get all posts
router.get('/', async (req, res) => {

   try{
      const allPosts = await Post.find()
      res.status(200).json(allPosts)
   } catch(err) {
      res.status(404).json({message: err})
   }

})

// add a new post
router.post('/', async (req, res) => {
   const post = new Post({
      title: req.body.title,
      description: req.body.description
   })

   try {
      const newPost = await post.save()
      res.status(200).json(newPost)
   } catch(err) {
      res.status(404).json({message: err})
   }

})

// query a single post
router.route('/:id')
.get(async (req, res) => {
   try {
      const post = await Post.findById(req.params.id)
      res.status(200).json(post)
   } catch (error) {
      res.status(404).json({message: error})
   }
})
.patch(async (req, res) => {
   try {
      const updatedPost = await Post.updateOne(
         {_id: req.params.id},
         { 
            $set: { title: req.body.title, description: req.body.description }
         }
      )
      res.status(200).json({message: "updated", details: updatedPost})
   } catch (error) {
      res.status(404).json({message: error})
   }
})
.delete( async (req, res) => {
   try {
      const deletedPost = await Post.deleteOne({ _id: req.params.id })
      res.status(200).json({message: "deleted", details: deletedPost})
   } catch (error) {
      res.status(404).json({message: error})
   }
})

module.exports = router