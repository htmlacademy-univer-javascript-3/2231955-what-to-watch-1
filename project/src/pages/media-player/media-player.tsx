import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm} from '../../store/film-data/selectors';
import {useEffect, useRef, useState} from 'react';
import {getTimeString} from '../../services/time';
import {fetchFilm} from '../../api/api-actions';
import {Spinner} from '../../components/spinner/spinner';

export function MediaPlayer(): JSX.Element {
  const filmToShow = useAppSelector(getFilm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const play = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying( true);
    }
  };
  const pause = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying( false);
    }
  };
  const [timeLeft, setTimeLeft] = useState(0);
  const progressRef = useRef(null);
  const [progress, setProgressPercent] = useState(0);

  const updateProgress = () => {
    if (videoRef.current) {
      setTimeLeft(Math.round(videoRef.current?.duration - videoRef.current?.currentTime));
      setProgressPercent((videoRef.current?.currentTime * 100) / videoRef.current?.duration);
    }
  };

  const fullScreen = () => {videoRef.current?.requestFullscreen();};

  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);
  return (filmToShow ? (
    <div className="player">
      <video src={`${filmToShow.videoLink}`}
        className="player__video"
        autoPlay
        poster={filmToShow.posterImage}
        ref={videoRef}
        onTimeUpdate={updateProgress}
      />

      <Link to={`/films/${filmToShow.id}`} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}} ref={progressRef}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeString(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {!isPlaying ?
            <button type="button"
              className="player__play"
              onClick={play}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            </button> :
            <button type="button"
              className="player__play"
              onClick={pause}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
            </button>}


          <div className="player__name">{filmToShow.name}</div>

          <button type="button"
            className="player__full-screen"
            onClick={fullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>) : <Spinner/>);
}
