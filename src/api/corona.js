import axios from 'axios';

export default axios.create({
    method: 'get',
    baseURL: 'https://api.covid19api.com',
    headers: { }
})