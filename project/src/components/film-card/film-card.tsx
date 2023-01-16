import {FilmInfo} from '../../types/film-page';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import VideoPlayer from '../video-player/video-player';
export type SmallFilmCardProps = {
  film: FilmInfo;
}
function FilmCard(props: SmallFilmCardProps):JSX.Element{
  const navigate = useNavigate();

  const [isPlayerOn, setIsPlayerOn] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);

  function handleMouseOver() {
    setTimer(setTimeout(() => setIsPlayerOn(true), 1000));
  }

  function handleMouseOut() {
    clearTimeout(timer);
    setIsPlayerOn(false);
  }

  return (
    <article className="small-film-card catalog__films-card" onClick={() => navigate(`/films/${props.film.id}`)} onPointerEnter={handleMouseOver} onPointerLeave={handleMouseOut}>

      <div className="small-film-card__image">
        {
          isPlayerOn ?
            <VideoPlayer posterSrc={props.film.posterImage} videoSrc={props.film.videoLink}/> :
            <img src={props.film.posterImage} alt={props.film.posterImage} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );


}

export default FilmCard;
