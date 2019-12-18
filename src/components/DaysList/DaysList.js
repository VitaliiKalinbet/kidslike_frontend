import React from 'react';
import PropTypes from 'prop-types';
import style from './DaysList.module.css';
import { ReactComponent as Done } from '../../assets/icons/done/check-mark-black-outline.svg';

const DaysList = ({ daysJson }) => {
  return (
    <form action="">
      <ul className={style.DayList}>
        {daysJson.map(day => (
          <li key={day.id}>
            <label className={style.container_checkbox} htmlFor={day.name}>
              <input id={day.name} type="checkbox" className={style.input} />
              {day.days}
              <span className={style.checkmark}>
                <Done
                  className={style.checkmark_icon}
                  width="15px"
                  height="15px"
                />
              </span>
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
};

DaysList.propTypes = {
  daysJson: PropTypes.shape([]).isRequired,
};

export default DaysList;

// <div className={style.DayList}>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Пн
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Вт
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Ср
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Чт
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Пт
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Сб
// </label>
// <label className={style.checkbox} htmlFor="ready">
//   <input id="ready" type="checkbox" />
//   Вс
// </label>
// </div>
