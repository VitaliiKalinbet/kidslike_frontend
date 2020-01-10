import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';
import 'react-sweet-progress/lib/style.css';
import style from './ProgressBar.module.css';

const ProgressBar = ({ userPoints, countPoints }) => {
  let percent = 100;
  if (countPoints) {
    percent = parseFloat((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <>
      <div className={style.Progress}>
        <div className={style.progressBarDiv}>
          <div className={style.progressNumbers}>
            <p className={style.progressText}>
              Балів за весь період: <span>{userPoints}</span>
            </p>
            <p className={style.progressText}>
              Заплановано балів:
              <span>{countPoints}</span>
            </p>
            {/* <span>
              {userPoints} / {countPoints}
            </span> */}
          </div>
          <Progress percent={percent > 100 ? 100 : percent} />
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
