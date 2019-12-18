import React from 'react';
import { Progress } from 'react-sweet-progress';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = () => {
  return (
    <>
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
      <div className={style.Progress}>
        <Progress percent={88} />
      </div>
    </>
  );
};

export default ProgressBar;
