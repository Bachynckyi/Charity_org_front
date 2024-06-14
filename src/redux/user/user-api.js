import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://charity-org-back.onrender.com',
  withCredentials: true, 
});

export const logIn = async data => {
  const { data: result } = await instance.post('/api/user/login', data);
  return result;
};

export const checkUser = async () => {
    const { data } = await instance.get('/api/user/refresh');
    return data;
};

export const logOut = async () => {
  const { data } = await instance.post('/api/user/logout');
  return data;
};



