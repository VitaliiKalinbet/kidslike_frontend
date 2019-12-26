/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { sumAwardsCardAction } from '../../redux/awards/awardsAction';
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
  const dispatch = useDispatch();
  const { id, title, taskPoints, days } = taskInfo;
  const { isActive } = days;
  // console.log('days :', days);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;
    // console.log('value :', value);
    // dispatch(sumAwardsCardAction(value));
    // console.log('target.id :', target.id);
    // console.log('value :', value);
  };

  const renderElement = () => {
    let url;

    const urlDay = new URLSearchParams(search).get('day');

    if (urlDay) {
      url = momentObj.day(urlDay).isoWeekday();
    }

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
      return <TaskStatus active={days} id={id} />;
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
