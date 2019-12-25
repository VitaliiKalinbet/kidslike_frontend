/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import PointAmount from '../PointAmount/PointAmount';
import CardTitle from '../CardTitle/CardTitle';
import SelectDays from '../SelectDays/SelectDays';
import TaskToggle from '../TaskToggle/TaskToggle';
import TaskStatus from '../TaskStatus/TaskStatus';

import s from './CardFooter.module.css';

const today = moment().isoWeekday();
const momentObj = moment();
console.log('today :', today);

const CardFooter = ({ ...taskInfo }) => {
  const { search, pathname } = useLocation();
  const { id, title, taskPoints, days } = taskInfo;

  useEffect(() => {}, [search]);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;
    // console.log('target.id :', target.id);
    // console.log('value :', value);
  };

  const renderElement = () => {
    let url;

    const urlDay = new URLSearchParams(search).get('day');
    console.log('urlDay :', urlDay);

    if (urlDay) {
      url = momentObj.day(urlDay).isoWeekday();
    }
    console.log('url :', url);

    if (pathname === '/planning') {
      return <SelectDays id={id} days={days} />;
    }

    if (pathname === '/awards') {
      return <TaskToggle onChange={handleChangeAwards} id={id} />;
    }
    if (today === url) {
      return <TaskToggle />;
    }
    if (url > today) {
      return null;
    }
    if (url < today) {
      return <TaskStatus />;
    }
  };

  return (
    <div className={s.card_footer}>
      <div>
        <CardTitle title={title} />
        <PointAmount point={taskPoints} />
      </div>
      <>{renderElement()}</>
    </div>
  );
};

export default CardFooter;
