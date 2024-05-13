import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://charity-org-back.onrender.com',
});

export const requestOrg = async (data) => {
    const result = await instance.post('/api/helprequest/organization', data);
    return result;
};

export const requestPrivat = async (data) => {
  const result = await instance.post('/api/helprequest/privat', data);
  return result;
};