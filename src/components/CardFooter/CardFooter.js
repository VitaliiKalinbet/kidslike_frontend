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

const CardFooter = ({ ...taskInfo }) => {
  const { search, pathname } = useLocation();
  const { _id, title, taskPoints, days, isDone, isSelected } = taskInfo;

  useEffect(() => {}, [search]);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;
  };

  const renderElement = () => {
    let url;

    const urlDay = new URLSearchParams(search).get('day');

    if (urlDay) {
      url = momentObj.day(urlDay).isoWeekday();
    }

    if (pathname === '/planning') {
      return <SelectDays id={_id} days={days} />; // onChange && connect to store
    }

    if (pathname === '/awards') {
      return (
        <TaskToggle onChange={handleChangeAwards} id={_id} value={isSelected} />
      );
    }
    if (today === url) {
      return <TaskToggle mainValue={isDone} />;
    }
    if (url > today) {
      return null;
    }
    if (url < today) {
      return <TaskStatus mainValue={isDone} />;
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
