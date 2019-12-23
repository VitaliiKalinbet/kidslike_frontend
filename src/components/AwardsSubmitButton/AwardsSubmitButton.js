import React from 'react';
import style from './AwardsSubmitButton.module.css';

const AwardsSubmitButton = () => {
  return (
    <div className={style.present_button}>
      <button className={style.button} type="submit">
        ОК
      </button>
    </div>
  );
};

export default AwardsSubmitButton;
