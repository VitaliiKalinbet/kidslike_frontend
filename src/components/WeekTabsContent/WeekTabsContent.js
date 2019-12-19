import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import CardList from '../CardsList/index';
import s from './WeekTabsContent.module.css';

const WeekTabsContent = () => {
  return (
    <div className={s.body}>
      <div className={s.div1} />
      <div className={s.div2} />

      <ProgressBar />
      <CardList />
    </div>
  );
};

export default WeekTabsContent;
