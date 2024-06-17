import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../servicos/authService';

const Registrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [escola, setEscola] = useState('');
  const [erro, setErro] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authService.register({ nome, email, senha, escola });
      history.push('/login');
    } catch (err) {
      setErro('Falha no registro. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <div>
          <label>Escola:</label>
          <input type="text" value={escola} onChange={(e) => setEscola(e.target.value)} required />
        </div>
        {erro && <p>{erro}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registrar;
