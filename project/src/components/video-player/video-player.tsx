export type VideoPlayerProps = {
  videoSrc: string;
  posterSrc: string;
}


function VideoPlayer(props: VideoPlayerProps): JSX.Element{

  return (
    <video src={`${props.videoSrc}#t=0`} autoPlay width="280" height="175" muted poster={props.posterSrc}/>
  );
}

export default VideoPlayer;
