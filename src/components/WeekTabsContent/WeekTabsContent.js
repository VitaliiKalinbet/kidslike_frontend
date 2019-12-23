import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import ProgressBar from '../ProgressBar/ProgressBar';
import CardList from '../CardsList/index';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import CurrentDay from '../CurrentDay/CurrentDay';
import windowWidth from '../../utils/windowWidth';
import days from '../../utils/days.json';
import s from './WeekTabsContent.module.css';

let dayName;
let date;

const WeekTabsContent = () => {
  const { search } = useLocation();

  const getWeekDay = () => {
    let url;
    const urlDay = new URLSearchParams(search).get('day');
    if (urlDay) {
      url = moment()
        .day(urlDay)
        .isoWeekday();
      dayName = days[url - 1].name;
      date = moment()
        .day(url)
        .format('DD-MM-YYYY');
    }
  };

  getWeekDay();

  return (
    <div className={s.body}>
      {(windowWidth < 768 || windowWidth >= 1280) && <CurrentWeekRange />}
      <div className={s.div2}>
        {dayName && date && <CurrentDay day={dayName} date={date} />}
        <ProgressBar />
      </div>
      <div className={s.cardWrapper}>
        <CardList />
      </div>
    </div>
  );
};

export default WeekTabsContent;
