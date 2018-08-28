const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (data) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

    });



});