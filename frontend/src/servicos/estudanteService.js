import axios from 'axios';

const API_URL = 'http://localhost:5000/api/estudantes';

const getAgenda = async () => {
  const response = await axios.get(`${API_URL}/agenda`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

const addAgenda = async (agendaData) => {
  const response = await axios.post(`${API_URL}/agenda`, agendaData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

const estudanteService = {
  getAgenda,
  addAgenda,
};

export default estudanteService;
