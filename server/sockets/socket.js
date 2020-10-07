const { io } = require('../server');

// Para saber cuando un usuario se conecta al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado...');

    // Emitimos un mensaje para que el cliente lo escuche y sepa que está conectado
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Cuando un usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado...');
    });

    // Escucha la info que se emita desde el cliente
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Todos los clientes están escuchando
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió MAL!!!'
        //     });
        // }

        // Para indicar que todo salió bien
        // callback();
    });

});