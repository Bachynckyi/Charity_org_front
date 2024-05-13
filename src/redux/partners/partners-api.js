import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://charity-org-back.onrender.com',
});

export const newRequestPartner = async (data) => {
    const result = await instance.post('/api/partners/requestnewpartner', data);
    return result;
};

export const offerPartner = async (data) => {
  const result = await instance.post('/api/partners/offerpartner', data);
  return result;
};