/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';
import s from './CardsList.module.css';
import tasks from './tasks';

const CardsList = () => {
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
