import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export default client;
