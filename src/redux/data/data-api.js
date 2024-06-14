import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://charity-org-back.onrender.com',
  withCredentials: true, 
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const getMonoLink = async () => {
  const { data } = await instance.get('/api/user/mono');
  return data;
};

export const editMonoLink = async ({token, request}) => {
  setToken(token);
  const { data } = await instance.patch('api/user/mono/edit-link', request);
  setToken();
  return data;
};