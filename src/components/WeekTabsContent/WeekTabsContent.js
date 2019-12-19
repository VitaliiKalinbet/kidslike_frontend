import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import CardList from '../CardsList/index';
import CurrentWeekRange from '../CurrentWeekRange/CurrentWeekRange';
import CurrentDay from '../CurrentDay/CurrentDay';
import s from './WeekTabsContent.module.css';

const WeekTabsContent = () => {
  return (
    <div className={s.body}>
      <CurrentWeekRange />
      <div className={s.div2}>
        <CurrentDay />
        <ProgressBar />
      </div>
      <CardList />
    </div>
  );
};

export default WeekTabsContent;
