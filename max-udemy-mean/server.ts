const appServer = require('./backend/app')
const PORT = 4201

appServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
