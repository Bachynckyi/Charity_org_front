import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://charity-org-back.onrender.com',
});

export const newRequestFeedback = async (data) => {
    const result = await instance.post('/api/feedback/requestfeedback', data);
    return result;
  };