var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'jen',
    text: "I like side glancing"
  });
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server')
});
