var socket = io();
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

//enviar informacion
// socket.emit('enviarMensaje', {

//     usuario: 'Daniel M',
//     mensaje: 'Hola MUndo'

// }, function(resp) {
//     console.log('servidor: ', resp);
// });

//escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
});