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

router.get('/:id', async (req: any, res: any) => {

  const id: string = req.params.id
  Post.findOne({ _id: id }).then((data: any) => {
    res.status(200).json({
      message: 'Post fetched sucessfully!',
      posts: [data]
    })
  })
  
})

router.delete('/:id', async (req: any, res: any) => {

  const id: string = req.params.id

  Post.deleteOne({ _id: id }).then((data: any) => {
    //console.log(data)
    res.status(200).json({
      message: 'Posts deleted sucessfully!',
      posts: data.acknowledged
    })
  })
  
})

router.put('/:id', async (req: any, res: any) => {

  const id: string = req.params.id
  const { title, content } = req.body

  Post.updateOne({ _id: id }, { title, content }).then((data: any) => {
    //console.log(data)
    res.status(200).json({
      message: 'Posts updated sucessfully!',
      posts: data.modifiedCount !== 0
    })
  })
  
})


module.exports = router