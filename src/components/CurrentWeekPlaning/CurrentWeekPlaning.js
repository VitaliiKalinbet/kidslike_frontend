import React from 'react';
import * as moment from 'moment';
import 'moment/locale/uk';
import s from './CurrentWeekPlaning.module.css';

const CurrentWeekPlaning = () => {
  const startOfWeek = moment()
    .startOf('week')
    .format('DD');
  const endOfWeek = moment()
    .endOf('week')
    .format('DD.MM.YYYY');
  return (
    <div>
      <p className={s.wrapper}>
        План на тиждень:
        <span className={s.week}>
          {' '}
          {startOfWeek} - {endOfWeek}{' '}
        </span>
      </p>
    </div>
  );
};

export default CurrentWeekPlaning;
