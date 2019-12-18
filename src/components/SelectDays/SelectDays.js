import React from 'react';
// import DaysList from '../DaysList/DaysList';
import s from './SelectDays.module.css';
import { ReactComponent as AddPlusButton } from '../../assets/icons/card/add-plus-button.svg';

const SelectDays = () => {
  return (
    <>
      <button type="submit" className={s.select_days}>
        <AddPlusButton className={s.addPlusButton} width="12" height="12" />
      </button>
      <button type="submit" className={s.select_days}>
        <span className={s.select_days_span}>OK</span>
      </button>
    </>
  );
};

export default SelectDays;
