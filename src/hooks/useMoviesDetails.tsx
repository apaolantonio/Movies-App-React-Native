import React from 'react';
import {useState, useEffect} from 'react';
import movieDB from '../api/moviesDB';
import {MovieFull} from '../interfaces/movieInterfaces';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: Boolean;
  cast: Cast[];
  movieFull?: MovieFull;
}
export const useMoviesDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailResponse, castPromiseResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setMovieDetails({
      isLoading: false,
      cast: castPromise.data.cast,
      movieFull: movieDetailPromise.data,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return {...movieDetails};
};
