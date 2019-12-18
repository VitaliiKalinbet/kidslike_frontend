import React from 'react';
import { Progress } from 'react-sweet-progress';
import PropTypes from 'prop-types';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = ({ points, allPoints }) => {
  return (
    <>
      <p>Балів з початку тижня</p>
      <p className={style.text}>
        {points}/{allPoints}
      </p>
      <div className={style.Progress}>
        <Progress percent={88} />
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  points: PropTypes.number.isRequired,
  allPoints: PropTypes.number.isRequired,
};

export default ProgressBar;
