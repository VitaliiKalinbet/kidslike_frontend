/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';
import s from './CardsList.module.css';
import tasks from './tasks';

const CardsList = () => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(el => {
        const { id, task } = el;
        return (
          <li className={s.card} key={id}>
            <Card {...task} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;
