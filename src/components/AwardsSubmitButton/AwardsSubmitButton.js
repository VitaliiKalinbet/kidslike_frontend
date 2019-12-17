import React from 'react';
import style from './AwardsSubmitButton.module.css';

const AwardsSubmitButton = () => {
  return (
    <div className={style.present_button}>
      <button className={style.button} type="submit">
        Підтвердити
      </button>
    </div>
  );
};

export default AwardsSubmitButton;
