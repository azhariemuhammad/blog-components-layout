const Blog = require('../models/blog-schema')

const getAllBlogPosts = (req, res) => {
  Blog.find()
  .populate('author')
  .then(posts => {
    res.status(200).send(posts)
  })
  .catch(err => {
    console.log(err);
  })
}

const getAllBlogPostsByUserId = (req, res) => {
  Blog.find({author: req.params.userId})
    .populate('author')
    .then(posts => {
      res.status(200).send(posts)
    })
    .catch(err => {
      console.log(err);
    })
}


const creatBlogPost = (req, res) => {
  console.log(req.body);
  Blog.create({
    title : req.body.title,
    author : req.body.author,
    article : req.body.article,
    img : req.body.img,
    graf: req.body.graf
  })
  .then(post => {
    res.status(200).send(post)
  })
  .catch(err => {
    console.log(err);
  })
}

const findById = (req, res) => {
  Blog.find({ _id : req.params._id })
  .then(post => {
    res.status(200).send(post)
  })
  .catch(err => {
    console.log(err);
  })
}

const findByIdAndUpdate = (req, res) => {
  Blog.findByIdAndUpdate({_id : req.params._id},{
    title : req.body.title,
    author : req.body.author,
    article : req.body.article,
    graf: req.body.graf,
    img: req.body.img
  })
  .then(post => {
    res.status(200).send(post)
  })
  .catch(err => {
    console.log(err);
  })
}

const findByIdAndRemove = (req, res) => {
  Blog.findByIdAndRemove({_id : req.params._id},{
  })
  .then(post => {
    res.status(200).send(post)
  })
  .catch(err => {
    console.log(err);
  })
}






module.exports = {
  getAllBlogPosts,
  creatBlogPost,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove,
  getAllBlogPostsByUserId
};
