/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import CardsList from './CardsList';

const momentObj = moment();

const ContainerList = ({ arr }) => {
  const { pathname, search } = useLocation();

  const currentCards = cardsArr => {
    if (pathname === '/') {
      let url;

      const urlDay = new URLSearchParams(search).get('day');

      if (urlDay) {
        url = momentObj.day(urlDay).isoWeekday();
        const step1 = cardsArr.map(el => {
          console.log('el :', el.days[url - 1]);
          return {
            ...el,
            days: el.days.filter(elem => !elem.isActive),
          };
        });
        return transit.filter(el => el.days.length);
      }
    }
    return cardsArr;
  };

  const cards = currentCards(arr);
  return cards.length ? (
    <CardsList tasks={cards} />
  ) : (
    <h3>Nothing to render</h3>
  );
};

export default ContainerList;
