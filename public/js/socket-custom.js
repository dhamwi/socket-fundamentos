var socket = io();

// Nos dice si estamos conectados con el servidor,
// si hay un canal de conexión abierto entre el servidor y el cliente
// on: Escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor...');
});

// Para que avise cuando se pierde la conexión con el servidor
socket.on('disconnect', function() {
    console.log('Se ha perdido la conexión con el servidor...');
});

// emit: Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Dani',
    mensaje: 'Hola Mundo'
}, function(resp) { // Se ejecuta cuando todo sale bien
    console.log('Respuesta server: ', resp);
});

// Escuchamos info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});