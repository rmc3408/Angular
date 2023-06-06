const { Router } = require('express')

const router = Router()

const posts = [
  { id: 'fdf2344', title: 'first Post', content: 'This is content of posts'},
  { id: 'fdf2345', title: 'Second Post', content: 'This is content of posts'},
  { id: 'fdf2346', title: 'thrid Post', content: 'This is content of posts'},
  { id: 'fdf2347', title: 'Fourth Post', content: 'This is content of posts'}
]

router.post('/', (req: any, res: any) => {
  const { title, content } = req.body
  posts.push({ id: "fdf2348", title, content })
  res.status(201).json({
    message: 'Posts created!'
  })
})

router.get('/', (req: any, res: any) => {
  res.status(200).json({
    message: 'Posts fetched sucessfully!',
    posts: posts
  })
})



module.exports = router