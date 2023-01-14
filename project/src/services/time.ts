function timeToMediaFormat (time: number) {
  return time > 9 ? time : `0${time}`;
}
export function getTimeString(timeLeft: number) {
  const hours = Math.floor(timeLeft / 60 / 60);
  const minutes = Math.floor(timeLeft / 60 - hours * 60);
  const seconds = Math.floor(timeLeft % 60);


  return hours > 0 ?
    `${timeToMediaFormat(hours)}:${timeToMediaFormat(minutes)}:${timeToMediaFormat(seconds)}` :
    `${timeToMediaFormat(minutes)}:${timeToMediaFormat(seconds)}`;
}
