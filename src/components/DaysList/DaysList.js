import React from 'react';
import PropTypes from 'prop-types';
import style from './DaysList.module.css';
import { ReactComponent as Done } from '../../assets/icons/done/check-mark-black-outline.svg';
import daysJsonArr from './DaysList.json';

const DaysList = ({ daysJson }) => {
  return (
    <form>
      <ul className={style.DayList}>
        {daysJson.map(day => (
          <li key={day.name}>
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

DaysList.defaultProps = {
  daysJson: daysJsonArr,
};

DaysList.propTypes = {
  daysJson: PropTypes.arrayOf(PropTypes.shape({})),
};

export default DaysList;
