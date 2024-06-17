import React, { useEffect, useState } from 'react';
import estudanteService from '../servicos/estudanteService';

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);
  const [disciplina, setDisciplina] = useState('');
  const [assunto, setAssunto] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchAgenda = async () => {
      const result = await estudanteService.getAgenda();
      setAgenda(result);
    };
    fetchAgenda();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novaEntrada = { disciplina, assunto, data };
    const result = await estudanteService.addAgenda(novaEntrada);
    setAgenda([...agenda, result]);
  };

  return (
    <div>
      <h2>Agenda de Estudos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Disciplina:</label>
          <input type="text" value={disciplina} onChange={(e) => setDisciplina(e.target.value)} required />
        </div>
        <div>
          <label>Assunto:</label>
          <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} required />
        </div>
        <div>
          <label>Data:</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {agenda.map((item, index) => (
          <li key={index}>{item.disciplina} - {item.assunto} - {item.data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Agenda;
