import axios from 'axios';

export default axios.create({
    baseURL: 'https://utm-f2p.flightchain.org',
    withCredentials: true
})