import React from 'react';
import style from './AwardsSubmitButton.module.css';

const AwardsSubmitButton = openModal => {
  return (
    <div className={style.present_button}>
      <button onClick={openModal} className={style.button} type="submit">
        Підтвердити
      </button>
    </div>
  );
};

export default AwardsSubmitButton;
