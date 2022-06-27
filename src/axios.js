import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURl:'https://api.themoviedb.org/3'
})

export default instance;