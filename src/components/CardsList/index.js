/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import CardsList from './CardsList';

const momentObj = moment();

const ContainerList = ({ arr }) => {
  const { search, pathname } = useLocation();

  const currentCards = cardsArr => {
    if (pathname === '/') {
      let url;
      const result = [];
      const urlDay = new URLSearchParams(search).get('day');

      if (urlDay) {
        url = momentObj.day(urlDay).isoWeekday();

        cardsArr.forEach(el => {
          const { _id, title, imgName, taskPoints } = el;
          const day = el.days[url - 1];
          const transit = { ...day, _id, title, imgName, taskPoints };

          day.isActive && result.push(transit);
        });
      }
      return result;
    }
    return cardsArr;
  };

  const cards = currentCards(arr);

  return cards.length ? <CardsList tasks={cards} /> : <h3>Day of relax</h3>;
};

export default ContainerList;
