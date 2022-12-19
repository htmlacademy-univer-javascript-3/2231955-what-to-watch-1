import {FilmInfo} from "./film-page";

export enum MediaFileStates{
  Paused = 'Paused',
  Playing = 'Playing',
}

export type MediaPlayerProps = {
  state: MediaFileStates;
  time: string;
}
