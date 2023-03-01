import {useEffect, useState} from 'react';
import movieDB from '../api/moviesDB';
import {MovieDBResponse, Movie} from '../interfaces/movieInterfaces';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>(`/now_playing`);
    const popular = movieDB.get<MovieDBResponse>(`/popular`);
    const topRated = movieDB.get<MovieDBResponse>(`/top_rated`);
    const upcoming = movieDB.get<MovieDBResponse>(`/upcoming`);

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {...movieState, isLoading};
};
