import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './DaysList.module.css';
import { ReactComponent as Done } from '../../assets/icons/done/check-mark-black-outline.svg';
import daysJsonArr from './DaysList.json';

const DaysList = ({ daysJson }) => {
  const renderDays = daysJson.map(day => {
    const key = shortid.generate();
    return (
      <li key={key}>
        <label
          className={style.container_checkbox}
          htmlFor={`${day.name}-${key}`}
        >
          <input
            id={`${day.name}-${key}`}
            type="checkbox"
            className={style.input}
          />
          {day.days}
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

DaysList.defaultProps = {
  daysJson: daysJsonArr,
};

DaysList.propTypes = {
  daysJson: PropTypes.arrayOf(PropTypes.shape({})),
};

export default DaysList;
