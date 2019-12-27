import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';
import 'react-sweet-progress/lib/style.css';
import style from './ProgressBar.module.css';

const ProgressBar = ({ userPoints, countPoints }) => {
  const percent = parseFloat((userPoints / countPoints) * 100);

  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>
          Балiв за весь перiод / Заплановано завдань на поточний тиждень
        </p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>
              {userPoints} / {countPoints}
            </span>
          </p>
          <Progress percent={percent} width="100px" />
        </div>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  userPoints: PropTypes.number.isRequired,
  countPoints: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  userPoints: state.auth.user.points,
  countPoints: getWeekPlanPoints(state),
});

export default connect(mapStateToProps, null)(ProgressBar);
