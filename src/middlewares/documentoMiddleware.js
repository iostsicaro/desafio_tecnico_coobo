const { validate: isUuid } = require('uuid');
const Documento = require('../models/Documentos');

// MIDDLEWARE QUE VERIFICA ID DO DOCUMENTO, NAS ROTAS QUE CONSTAM PARAMS DOCUMENTID
const verificarId = async (req, res, next) => {
    const { documentId } = req.params;

    if (!isUuid(documentId)) {
        return res.status(400).json({ error: 'ID inválido.'});
    }

    try {
        const documento = await Documento.findById(documentId);

        res.documento = documento;

        if (!documento) {
            return res.status(404).json({ error: 'Documento não foi encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });        
    }

    next();
}

module.exports = verificarId;