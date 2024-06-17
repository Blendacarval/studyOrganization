import React, { useEffect, useState } from 'react';
import escolaService from '../servicos/escolaService';

const Escolas = () => {
  const [escolas, setEscolas] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    const fetchEscolas = async () => {
      const result = await escolaService.getEscolas();
      setEscolas(result);
    };
    fetchEscolas();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novaEscola = { nome, endereco };
    const result = await escolaService.addEscola(novaEscola);
    setEscolas([...escolas, result]);
  };

  return (
    <div>
      <h2>Escolas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {escolas.map((escola, index) => (
          <li key={index}>{escola.nome} - {escola.endereco}</li>
        ))}
      </ul>
    </div>
  );
};

export default Escolas;
