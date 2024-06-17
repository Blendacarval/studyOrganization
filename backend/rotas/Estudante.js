const express = require('express');
const Agenda = require('../modelos/agenda');
const { autenticarToken } = require('../middleware/auth');

const router = express.Router();

router.get('/agenda', autenticarToken, async (req, res) => {
  try {
    const agenda = await Agenda.find({ usuario: req.usuario.id });
    res.json(agenda);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
});

router.post('/agenda', autenticarToken, async (req, res) => {
  try {
    const { disciplina, assunto, data } = req.body;
    const novaAgenda = new Agenda({ usuario: req.usuario.id, disciplina, assunto, data });
    await novaAgenda.save();
    res.status(201).json(novaAgenda);
  } catch (err) {
    res.status(500).json({ mensagem: err.message });
  }
});

module.exports = router;
