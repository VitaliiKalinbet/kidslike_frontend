/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import Card from '../Card';
import s from './CardsList.module.css';
import tasks from './tasks';

const CardsList = () => {
  const date = moment().get('date');
  const weekDay = moment().get('day');
  const month = moment().get('month');
  const year = moment().get('year');

  const total = moment()
    .year(year)
    .month(month)
    .date(date)
    .unix();

  console.log(date, weekDay, month, year, total);

  // const month = String(dayofunix.months + 1).padStart(2, '0');

  // console.log('dayofunix.years :', dayofunix.years);
  // console.log('dayofunix.months :', month);
  // console.log('dayofunix.date :', dayofunix.date);

  // console.log('day :', day);
  // console.log('dateDate :', dateDate);
  // console.log('test :', test);

  // console.log('dayofunix :', dayofunix);
  return (
    <ul className={s.cards_list}>
      {tasks.map(el => {
        const { id, ...task } = el;
        return (
          <li key={id} className={s.card}>
            <Card {...task} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;
