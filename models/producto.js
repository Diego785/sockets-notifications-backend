const { Schema, model} = require('mongoose');

const ProductoSchema = Schema({

    foto: {
        type: String,
        required: false,
    },

    nombre: {
        type: String,
        required: true,
    },

    fechaCreacion: {
        type: Date,
        required: false,
    },

    fechaVencimiento: {
        type: Date,
        required: true,
    },

});

module.exports = model('Producto', ProductoSchema);