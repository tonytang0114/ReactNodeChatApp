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
let connections = [];
io.on('connection', socket => {
    console.log('User connected')
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    socket.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            socket.emit('timer', new Date());
        }, interval);
    });

    socket.on('new user', (data) => {
        console.log(data);
        socket.username = data
        usernames.push(socket.username);
        UpdateAllUsers();
    })

    socket.on('send message', (data) => {
        io.emit('new message', data);
    });

    socket.on('disconnect', (data) => {
        if(!socket.username) return;
        usernames.splice(usernames.indexOf(socket.username),1);
        UpdateAllUsers();
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    function UpdateAllUsers(){
        io.emit('get users', usernames)
    }
})

server.listen(port, () => console.log(`Listening on port ${port}`))