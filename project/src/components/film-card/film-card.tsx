import {FilmInfo} from "../../types/film-page";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import VideoPlayer from "../video-player";
export type SmallFilmCardProps = {
  film: FilmInfo;
}
function FilmCard(props: SmallFilmCardProps):JSX.Element {
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
    <article className="small-film-card catalog__films-card" onPointerEnter={handleMouseOver} onPointerLeave={handleMouseOut}>

      <div className="small-film-card__image">
        {
          isPlayerOn ?
        <VideoPlayer posterSrc={props.film.poster.imageSrc} videoSrc={props.film.video.videoSrc}/>:
        <img src={props.film.poster.imageSrc} alt={props.film.poster.imageSrc} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );


}

export default FilmCard;
