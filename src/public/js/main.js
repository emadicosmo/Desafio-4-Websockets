const socket = io();

// Escuchar eventos de actualización de productos en tiempo real
// Realizar las acciones necesarias para actualizar la lista de productos en la vista realTimeProducts

socket.on('newProduct', () => {
  console.log('Nuevo producto agregado en tiempo real');

});

// Realizar las acciones necesarias para actualizar la lista de productos en la vista realTimeProducts

socket.on('productDeleted', () => {
  console.log('Producto eliminado en tiempo real');
});
