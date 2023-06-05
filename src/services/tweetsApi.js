import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://647cc633c0bae2880ad12a4a.mockapi.io',
});

export const fetchUsers = async signal => {
  try {
    const { data } = await agent.get('/users', {
      signal,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const followUser = async user => {
  try {
    const response = await agent.put(`/users/${user.id}`, user);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
