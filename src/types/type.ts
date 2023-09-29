export interface IMovieType {
  page: number;
  results: IResultType[];
  total_pages: number;
  total_results: number;
}

export interface IResultType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICardType {
  title: string;
  src: string;
  id: number;
  release_date: string;
  overview: string;
  vote_average: number;
}
