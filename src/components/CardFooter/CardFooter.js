/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { throttle } from 'throttle-debounce';
import { taskPlanningChangeAction } from '../../redux/tasks/tasksActions';
import { toggleSelectedCardAction } from '../../redux/awards/awardsAction';
import { changeTaskTodayOperation } from '../../redux/tasks/tasksOperations';
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
  const { _id, title, taskPoints, days, isDone, isSelected, date } = taskInfo;
  const dispatch = useDispatch();
  useEffect(() => {}, [search]);
  const totalPoints = useSelector(state => state.awards.totalPoints);
  const userPoints = useSelector(state => state.auth.user.points);

  const handleChangeAwards = ({ target }) => {
    const value = target.checked ? taskPoints : 0 - taskPoints;

    if (userPoints - totalPoints - value < 0) {
      toast.error('Балів не достатньо');
    } else {
      dispatch(toggleSelectedCardAction(_id));
    }
    // dispatch(sumAwardsCardAction(value));
  };

  const handleChangeTaskToday = (e, taskId) => {
    dispatch(changeTaskTodayOperation(taskId));
  };
  const throttled = throttle(1500, (e, taskId) => {
    handleChangeTaskToday(e, taskId);
  });

  const handleChangePlanningTask = ({ target }) => {
    dispatch(taskPlanningChangeAction(target.id));
    // console.log('target.id :', target.id);
    // console.log('target.checked :', target.checked);
  };

  const renderElement = () => {
    let url;

    const urlDay = new URLSearchParams(search).get('day');

    if (urlDay) {
      url = momentObj.day(urlDay).isoWeekday();
    }

    if (pathname === '/planning') {
      return (
        <SelectDays id={_id} days={days} onChange={handleChangePlanningTask} />
      );
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
          taskId={_id}
          onChange={e => throttled(e, _id)}
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
