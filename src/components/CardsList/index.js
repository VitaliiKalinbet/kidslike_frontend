/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import CardsList from './CardsList';

const ContainerList = ({ arr }) => {
  const { pathname } = useLocation();

  const currentCards = cardsArr => {
    if (pathname === '/awards' || pathname === '/planning') {
      return cardsArr;
    }
    if (pathname === '/') {
      // const currentCards = cardsArr.map(el => {
      //   el.days.map(el => {
      //     console.log('el :', el);
      //     el.isActive;
      //   });
      //   console.log('days :', el.days);
      // });
      return cardsArr;
    }
  };

  const cards = currentCards(arr);

  return arr ? <CardsList tasks={cards} /> : <h3>Where are tasks? </h3>;
};

export default ContainerList;
