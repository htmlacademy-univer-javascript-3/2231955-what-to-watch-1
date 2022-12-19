import {useAppDispatch, useAppSelector} from "../../hooks";
import { SetStateAction, Dispatch } from 'react';

import {useEffect} from "react";
import {showMoreFilms} from "../../store/action";

type ShowMoreProps = {
  isAllLoaded: boolean;
}
export function ShowMore({isAllLoaded}: ShowMoreProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (

    <div className="catalog__more">
      {isAllLoaded &&
        <button className="catalog__button"
                type="button"
                onClick={ (evt) => {
                  evt.preventDefault();
                  dispatch(showMoreFilms());
                }}>
          Show more
        </button>
      }
    </div>
    )

}
