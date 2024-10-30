
import axios from 'axios';

const API_URL = 'https://6701579eb52042b542d782e5.mockapi.io/datadb';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo) => {
  
  const response = await axios.post(API_URL,todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
