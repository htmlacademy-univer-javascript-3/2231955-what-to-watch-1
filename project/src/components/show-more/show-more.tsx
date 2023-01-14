import {useAppDispatch} from '../../hooks';

import {showMore} from '../../store/main-data/main-data';

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
            dispatch(showMore());
          }}
        >
          Show more
        </button>}
    </div>
  );

}
