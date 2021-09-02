const express = require('express');
const rotas = express();

const { listarDocumentos, obterDocumento, criarDocumentos, deletarDocumento, } = require('./controladores/documentos');
const diaDaSemana = require('./controladores/diasDaSemana');
const verificarId = require('./middlewares/documentoMiddleware');

// ROTAS DE DOCUMENTOS
rotas.get('/documents', listarDocumentos);
rotas.get('/documents/:documentId', verificarId, obterDocumento);
rotas.post('/documents', criarDocumentos);
rotas.delete('/documents/:documentId', verificarId, deletarDocumento)

// ROTA DIA DA SEMANA
rotas.get('/weekday-after', diaDaSemana);

module.exports = rotas;