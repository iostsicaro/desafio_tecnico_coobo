const { v4: uuid } = require('uuid');
const base64 = require('base-64');
const Documentos = require('../models/Documentos');

const listarDocumentos = async (req, res) => {
    try {
        const documentos = await Documentos.find();

        return res.status(200).json({ documentos })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const obterDocumento = async (req, res) => {
    const { documentId } = req.params;

    try {
        const documento = await Documentos.findById(documentId);

        return res.status(200).json({ documento })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const criarDocumentos = async (req, res) => {
    const { nome, content } = req.body;

    try {
        const nomeEncontrado = await Documentos.where({ nome });

        if (nomeEncontrado.length > 0) {
            return res.status(404).json('Nome já foi cadastrado.');
        }

        const conteudoCodificado = base64.encode(content);
        let arrayCodificado = conteudoCodificado.split(''), valorFinal = 0;

        arrayCodificado.forEach(item => {
            if (item == '=') {
                valorFinal += 1;
            }
        });

        const tamanhoEmKilobytes = ((conteudoCodificado.length * (3 / 4)) - valorFinal) / 1024;

        const documento = new Documentos({
            _id: uuid(),
            kbSize: tamanhoEmKilobytes,
            nome,
            content: conteudoCodificado,
            createdAt: Date(),
            deletedAt: null,
        })

        await documento.save();

        return res.status(201).json({ message: 'Documento criado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletarDocumento = async (req, res) => {
    const { documentId } = req.params;

    try {
        const documentoDeletado = await Documentos.findByIdAndUpdate(documentId, { deletedAt: Date() }, { new: true });

        return res.status(200).json(documentoDeletado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarDocumentos,
    obterDocumento,
    criarDocumentos,
    deletarDocumento
}