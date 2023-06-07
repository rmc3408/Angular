const { Router } = require('express')
const router = Router()

const Post = require('../db')

// const posts = [
//   { id: 'fdf2344', title: 'first Post', content: 'This is content of posts'},
//   { id: 'fdf2345', title: 'Second Post', content: 'This is content of posts'},
//   { id: 'fdf2346', title: 'thrid Post', content: 'This is content of posts'},
//   { id: 'fdf2347', title: 'Fourth Post', content: 'This is content of posts'}
// ]

router.post('/', (req: any, res: any) => {
  const { title, content } = req.body
  
  // In-memory code
  //posts.push({ id: postDB._id.valueOf(), title, content })

  // mongoDB
  const postDB = new Post({
    title, content
  })
  postDB.save()
  
  res.status(201).json({
    message: 'Posts created!',
    posts: postDB
  })
})

router.get('/', async (req: any, res: any) => {

  Post.find().then((data: any) => {
    res.status(200).json({
      message: 'Posts fetched sucessfully!',
      //posts: posts,
      posts: data
    })
  })
  
})



module.exports = router