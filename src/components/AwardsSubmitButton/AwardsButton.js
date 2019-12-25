import React from 'react';
import PropTypes from 'prop-types';
import style from './AwardsSubmitButton.module.css';

const AwardsButton = ({ onClick }) => {
  return (
    <div className={style.present_button}>
      <button onClick={onClick} className={style.button} type="submit">
        ОК
      </button>
    </div>
  );
};

AwardsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AwardsButton;
