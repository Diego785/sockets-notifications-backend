const { io } = require("../index");


//Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Cliente Conectado");

  io.emit("emitir-alerta", {alerta: "Emitiendo mi alerta desde el server"});


  client.on("disconnect", () => {
    console.log("Cliente Desconectado");
  });

  // client.on("emitir-mensaje", (payload) => {
  //   console.log(payload);
  //   client.emit("emitir-respuesta", {respuesta: "Mensaje enviado correctamente"});
  // });
    //TAREA
    client.on("emitir-mensaje", (payload) => {
      client.broadcast.emit("nuevo-mensaje", payload);
    });
  
});