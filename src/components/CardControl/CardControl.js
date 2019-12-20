import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import SelectDays from '../SelectDays/SelectDays';
import TaskToggle from '../TaskToggle/TaskToggle';

const CardControl = () => {
  const { search, pathname } = useLocation();

  const today = moment().day();
  // baseUrl?day=monday&unix-date=1576503044283
  const urlDay = new URLSearchParams(search).get('day');
  // const url = moment()
  //   .day(urlDay)
  //   .weekday();

  // const today =
  //   moment()
  //     .date()
  //     .toString() +
  //   (moment().month() + 1).toString() +
  //   moment()
  //     .year()
  //     .toString();

  // const urlDay =
  //   moment(urlDate)
  //     .date()
  //     .toString() +
  //   (moment(urlDate).month() + 1).toString() +
  //   moment(urlDate)
  //     .year()
  //     .toString();

  const renderElement = () => {
    if (pathname === '/planning') {
      return <SelectDays />;
    }
    if (Number(today) === urlDay) {
      return <TaskToggle />;
    }
    return null;
  };

  return (
    console.log('today :', today) ||
    // console.log('url :', url) ||
    renderElement()
  );
};

export default CardControl;

// logic

// day-day:
// footer title+footer point + toggle

// day after day
// footer title+footer point + nothing

// day before day
// footer title+footer point + ! or "done"

// planning page
// footer title + footer point + addbtn + select
