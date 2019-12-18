import React from 'react';
import style from './DaysList.module.css';

const DaysList = () => {
  return (
    <div className={style.DayList}>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Пн
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Вт
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Ср
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Чт
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Пт
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Сб
      </label>
      <label className={style.checkbox} htmlFor="ready">
        <input id="ready" type="checkbox" />
        Вс
      </label>
    </div>
  );
};

export default DaysList;
