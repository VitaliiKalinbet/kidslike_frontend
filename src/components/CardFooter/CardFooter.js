/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PointAmount from '../PointAmount/PointAmount';
import CardTitle from '../CardTitle/CardTitle';
import SelectDays from '../SelectDays/SelectDays';
import TaskToggle from '../TaskToggle/TaskToggle';
import TaskStatus from '../TaskStatus/TaskStatus';

import s from './CardFooter.module.css';

const today = moment().day();
let url;

const CardFooter = ({ ...taskInfo }) => {
  const { search, pathname } = useLocation();
  const awards = useSelector(state => state.awards.arrayAwards);
  const dispatch = useDispatch;
  const { id, title, taskPoints } = taskInfo;
  // console.log('taskInfo :', taskInfo);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;
    // console.log('target.id :', target.id);
    // console.log('value :', value);
  };

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
