/* eslint-disable react/prop-types */
import React from 'react';
import s from './CardsList.module.css';
import tasks from './tasks';

const CardList = ({ children }) => {
  return (
    <ul className={s.cards_list}>
      {tasks.map(el => (
        <li className={s.card} key={el.id}>
          {children}
        </li>
      ))}
    </ul>
  );
};

export default CardList;
