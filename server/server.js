const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)
console.log("server is running");

let usernames = [];

io.on('connection', socket => {
    console.log('User connected')

    socket.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            socket.emit('timer', new Date());
        }, interval);
    });

    socket.on('new user', (data, callback) => {
        callback(true);
        usernames.push(data);
        UpdateAllUsers();
    })

    socket.on('send message', (data) => {
        console.log(data);
        io.emit('new message', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

    function UpdateAllUsers(){
        io.emit('get users', usernames)
    }
})

server.listen(port, () => console.log(`Listening on port ${port}`))