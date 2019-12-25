import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';

const ProgressBar = ({ countPoints }) => {
  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>Набрано балiв: </p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>0 /{countPoints} </span>
          </p>
          <Progress percent={0} />
        </div>
      </div>
    </>
  );
};

const MSTP = state => ({
  countPoints: getWeekPlanPoints(state),
});

ProgressBar.propTypes = {
  countPoints: PropTypes.number.isRequired,
};

export default connect(MSTP)(ProgressBar);
