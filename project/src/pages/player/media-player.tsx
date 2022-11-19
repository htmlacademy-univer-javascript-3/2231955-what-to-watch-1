import {MediaFileStates, MediaPlayerProps} from '../../types/media-player-state';
import {Link, Navigate, useParams} from "react-router-dom";
import {Urls} from "../../store/urls";

export function MediaPlayer(props: MediaPlayerProps): JSX.Element {
  const filmToShow = props.films.find((film) => film.id == useParams().id)
  filmToShow ? console.log(filmToShow.video.videoSrc) : console.log("asd")

  return filmToShow ? (
    <div className="player">
      <video src={filmToShow.video.videoSrc} className="player__video" poster={filmToShow.poster.imageSrc}></video>

      <Link to={`/films/${filmToShow.id}`} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">

          <button type="button" className="player__play">
            {
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg> }
          </button>

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) :  <Navigate to={Urls.NotFound}/>;
}
