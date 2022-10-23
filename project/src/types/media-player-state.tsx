export enum MediaFileStates{
  Paused = 'Paused',
  Playing = 'Playing',
}

export type MediaPlayerState = {
  state: MediaFileStates;
  time: string;
}
