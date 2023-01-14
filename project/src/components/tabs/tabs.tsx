import {FilmInfo} from '../../types/film-page';
import {useMemo, useState} from 'react';
import OverviewFilm from './overview';
import {ReviewsFilm} from './reviews';
import {DetailsFilm} from './details';

export type TabsProps = {
  film: FilmInfo
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export function Tabs(props: TabsProps): JSX.Element {

  const tabs = [Tab.Overview, Tab.Details, Tab.Reviews];

  const [currentTab, changeTab] = useState(tabs[0]);

  const tab = useMemo(() =>
  {
    switch (currentTab){
      case Tab.Details:
        return <DetailsFilm film={props.film}/>;
      case Tab.Overview:
        return <OverviewFilm film={props.film}/>;
      case Tab.Reviews:
        return <ReviewsFilm film={props.film}/>;

    }
  }, [currentTab, props.film]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((t) => (
            <li key={t} className={`film-nav__item ${currentTab === t ? 'film-nav__item--active' : ''}`} >
              <button className="film-nav__link" style={{background:'transparent', border:'none'}} onClick={() => changeTab(t)}>{t}</button>
            </li>))}
        </ul>
      </nav>
      {tab}
    </div>
  );
}

