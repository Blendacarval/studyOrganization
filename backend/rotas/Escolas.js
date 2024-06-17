const express = require('express');
const Escola = require('../modelos/escola');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const escolas = await Escola.find();
    res.json(escolas);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nome, endereco } = req.body;
    const novaEscola = new Escola({ nome, endereco });
    await novaEscola.save();
    res.status(201).json(novaEscola);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
});

module.exports = router;
