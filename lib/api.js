```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const recoverPassword = async (email) => {
  const response = await api.post('/auth/recover', { email });
  return response.data;
};

export const loadConversations = async () => {
  const response = await api.get('/conversations');
  return response.data;
};

export const updateConversation = async (id, conversationData) => {
  const response = await api.put(`/conversations/${id}`, conversationData);
  return response.data;
};

export const deleteConversation = async (id) => {
  const response = await api.delete(`/conversations/${id}`);
  return response.data;
};

export const searchConversations = async (keyword) => {
  const response = await api.get(`/conversations?search=${keyword}`);
  return response.data;
};

export const filterConversations = async (filterParams) => {
  const response = await api.get('/conversations', { params: filterParams });
  return response.data;
};

export default api;
```