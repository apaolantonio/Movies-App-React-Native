import axios from 'axios';

const movieDB = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  params: {
    api_key: `61fa723f48959bf60ca3bba2aaadcd56`,
    language: `es-ES`,
  },
});

export default movieDB;
