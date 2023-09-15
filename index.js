const express = require('express')
const bodyparser = require('body-parser')
const path = require("path")
const db = require('./db.config.js')
const cors = require('cors')

const app = express()
const server = app.listen(3000, () => console.log('listening on port 3000...'))
const io = require('socket.io')(server)


app.use(cors())
app.use(express.static("dist"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})


app.post('/send', async (req, res) => {
  const message = req.body.message
  if (message && message.length <= 255) {
    
    const query_result = await db.query(`INSERT INTO messages (post_date, content) VALUES (312, '${message}')`)
    console.log(query_result)
    res.send({ status: 'accepted' })
  } else {
    res.send({ status: 'invalid' })
  }
})

io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('new_message', (messageObject) => {
    console.log('message received')
    io.emit('new_message', messageObject);
  })
})

