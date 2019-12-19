/* eslint-disable react/prop-types */
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Card from '../Card';
import s from './CardsList.module.css';
import popTransition from './pop.module.css';
import tasks from './tasks';

const CardsList = () => {
  return (
    <TransitionGroup component="ul" className={s.cards_list}>
      {tasks.map(el => {
        const { id, ...task } = el;
        return (
          <CSSTransition key={id} timeout={5000} classNames={popTransition}>
            <li className={s.card}>
              <Card {...task} />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default CardsList;
