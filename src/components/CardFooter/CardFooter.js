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
// console.log('today :', today);

const CardFooter = ({ ...taskInfo }) => {
  const { search, pathname } = useLocation();
  const { _id, title, taskPoints, days, isDone, isSelected, date } = taskInfo;
  const dispatch = useDispatch();
  useEffect(() => {}, [search]);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;
    dispatch(sumAwardsCardAction(value));
  };

  const handleChangeTaskToday = ({ target }) => {
    console.log('target.id :', target.id);
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
      return (
        <TaskToggle
          id={`${_id}_${date}`}
          onChange={handleChangeTaskToday}
          value={isDone}
        />
      );
    }
    if (url > today) {
      return null;
    }
    if (url < today) {
      return <TaskStatus value={isDone} />;
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
