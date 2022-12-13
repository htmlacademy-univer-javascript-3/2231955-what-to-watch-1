import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import {useState} from "react";
import {OverviewFilm} from "./overview";
import {ReviewsFilm} from "./reviews";
import {DetailsFilm} from "./details";

export type TabsProps = {
  film: FilmInfo
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export function Tabs(props: TabsProps): JSX.Element {

  const tabs = [Tab.Overview, Tab.Details, Tab.Reviews]

  const [currentTab, changeTab] = useState(tabs[0])
  const getCurrentTabContent = () =>
  {
    switch (currentTab){
      case Tab.Details:
        return <DetailsFilm film={props.film}/>;
      case Tab.Overview:
        return <OverviewFilm film={props.film}/>;
      case Tab.Reviews:
        return <ReviewsFilm film={props.film}/>;

    }
  }
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li className={`film-nav__item ${currentTab === tab? `film-nav__item--active`: ''}`} >
              <button className="film-nav__link" style={{background:'transparent', border:'none'}} onClick={() => changeTab(tab)}>{tab}</button>
            </li>))}
        </ul>
      </nav>
      {getCurrentTabContent()}
    </div>
  )
}

