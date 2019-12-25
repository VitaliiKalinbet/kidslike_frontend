/* eslint-disable react/prop-types */
import React from 'react';
import shortid from 'shortid';
import style from './DaysList.module.css';
import { ReactComponent as Done } from '../../assets/icons/done/check-mark-black-outline.svg';

const DaysList = ({ id, days, onChange }) => {
  const renderDays = days.map(day => {
    const key = `${id}_${day.date}`;
    return (
      <li key={key}>
        <label className={style.container_checkbox} htmlFor={`${key}`}>
          <input
            id={`${key}`}
            type="checkbox"
            className={style.input}
            name={`${day.name}`}
            checked={day.isActive}
            onChange={onChange}
          />
          {day.title}
          <span className={style.checkmark}>
            <Done className={style.checkmark_icon} width="15px" height="15px" />
          </span>
        </label>
      </li>
    );
  });
  return (
    <form className={style.form}>
      <ul className={style.DayList} id={shortid.generate()}>
        {renderDays}
      </ul>
    </form>
  );
};

export default DaysList;
