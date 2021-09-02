const mongoose = require('mongoose');

// SCHEMA DO BANCO DE DADOS MONGO DB
const documentosSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    kbSize: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date()
    },
    deletedAt: {
        type: Date,
    }
});

module.exports = mongoose.model('Documentos', documentosSchema);