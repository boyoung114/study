import axios from 'axios';

export const getMovies = async (page: number) => {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_TOKEN,
          accept: 'application/json'
        }
      }
    )
    .then(async (res) => {
      return res.data;
    });

  return data;
};
