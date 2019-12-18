/* eslint-disable react/prop-types */
import React from 'react';
import s from './CardsList.module.css';
import tasks from './tasks';

const CardList = ({ children }) => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(el => {
        const { id, task } = el;
        return (
          <li className={s.card} key={id}>
            {(children, task)}
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
