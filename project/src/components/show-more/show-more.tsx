import {useAppDispatch, useAppSelector} from "../../hooks";
import {setCountFilms} from "../../store/action";
import {useEffect} from "react";

export function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  const {count, totalCount} = useAppSelector((state) => state)
  console.log(count, totalCount)
  return count <= totalCount ?
    (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(setCountFilms())}>Show more</button>
    </div>
    ):
    <></>
}
