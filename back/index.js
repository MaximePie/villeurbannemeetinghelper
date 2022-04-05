const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname })
})

app.get('/json', function (req, res) {
  res.status(200).json({"message":"ok"})
})

// établissement de la connexion
io.on('connection', (socket) =>{
  console.log(`Connecté au client ${socket.id}`)
})

app.get("/meetingFound", async (req, res) => {

  const {month, day} = req.query
  const date = new Date();
  date.setMonth(month);
  date.setDate(day);

  console.log("Meeting found !");

  io.emit('found', date)
  res.json({message: "ok, ok"})
})

app.get('/meetingGone', async (request, response) => {
  console.log("Meeting found !");
  io.emit('gone')
  response.json({message: "it's gone. :("})
})

server.listen(process.env.PORT || 5000)

