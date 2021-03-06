import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4001');

function subscribeToTimer(callback) {
  socket.on('timer', timestamp => callback(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToMsg(msg){
    socket.emit('send message',msg);
}

function ReceiveMsg(callback) {
    socket.on('new message', msg => callback(msg));
}

function subscribeToUsers(user){
    socket.emit('new user',user);
}

function ReceiveUserName(callback){
    socket.on('get users', users=> callback(users));
}



export { subscribeToTimer };
export { subscribeToMsg};
export { ReceiveMsg };
export {subscribeToUsers};
export {ReceiveUserName};