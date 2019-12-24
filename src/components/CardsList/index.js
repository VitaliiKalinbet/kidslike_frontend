/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Card from '../Card';
import s from './CardsList.module.css';

let url;

const CardsList = ({ tasks = [] }) => {
  const { search, pathname } = useLocation();

  const getCurrentTasks = taskArr => {
    const urlDay = new URLSearchParams(search).get('day');
    if (urlDay) {
      url = moment()
        .day(urlDay)
        .weekday();

      return taskArr.map(el => ({
        id: el._id,
        title: el.title,
        taskPoints: el.taskPoints,
        imgName: el.imgName,
        isDone: el.days[url].isDone,
      }));
    } else {
      return taskArr;
    }
  };

  useEffect(() => {}, [search, tasks]);

  const currentTasks = getCurrentTasks(tasks);

  return (
    currentTasks && (
      <ul className={s.cards_list}>
        {currentTasks.map(el => {
          const { id, ...task } = el;
          return (
            <li key={id} className={s.card}>
              <Card {...task} />
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CardsList;
