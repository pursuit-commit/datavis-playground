import imdbData from './assets/imdb_data.json';

export interface ITitle {
  id: string;
  titleType: string;
  primaryTitle: string;
  originalTitle: string;
  isAdult: boolean;
  startYear: number;
  endYear: null;
  runtimeMinutes: number;
  genres: string[];
  averageRating: number;
  numVotes: number;
}

export const data = (imdbData as { titles: ITitle[] }).titles;

