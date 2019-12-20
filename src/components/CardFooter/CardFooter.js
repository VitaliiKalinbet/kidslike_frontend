/* eslint-disable consistent-return */
import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import PointAmount from '../PointAmount/PointAmount';
import CardTitle from '../CardTitle/CardTitle';
import SelectDays from '../SelectDays/SelectDays';
import TaskToggle from '../TaskToggle/TaskToggle';

import s from './CardFooter.module.css';

const today = moment().day();
let url;

const CardFooter = () => {
  const { search, pathname } = useLocation();

  const renderElement = () => {
    const urlDay = new URLSearchParams(search).get('day');
    if (urlDay) {
      url = moment()
        .day(urlDay)
        .isoWeekday();
    }

    if (pathname === '/planning') {
      return <SelectDays />;
    }

    if (pathname === '/awards') {
      return <TaskToggle />;
    }
    if (today === url) {
      return <TaskToggle />;
    }
    if (url > today) {
      return null;
    }
  };

  return (
    <div className={s.card_footer}>
      <div>
        <CardTitle />
        <PointAmount />
      </div>
      <>
        {renderElement()}
        {/* <CardControl /> */}
      </>
    </div>
  );
};

export default CardFooter;
