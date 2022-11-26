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
  id: string;
  background: ImageInfo;
  name: string;
  genre: string;
  year: number;
  director: string;
  starring: string[];
  poster: ImageInfo;
  isInList?: boolean;
  description: string;
  rating: Rating
  video: VideoInfo

}


