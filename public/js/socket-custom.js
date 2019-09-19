var socket = io();

//para saber si estoy conectado al servidor
//los sockets son para escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
socket.on('disconnect', function(){
    console.log('Se perdio la conexion');
});


//los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server: ', resp);
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log("servido: ", mensaje);
});

