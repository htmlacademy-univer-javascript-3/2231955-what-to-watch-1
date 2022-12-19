import {Genre} from "./genre";

export type ImageInfo = {
  imageSrc: string
  imageAlt: string
}
export type Rating = {
  rate : string,
  count: string,
}

export type VideoInfo = {
  videoSrc : string,
  start: string,
}
export type FilmInfo = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}


