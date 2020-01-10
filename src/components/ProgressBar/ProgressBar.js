import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import getWeekPlanPoints from '../../redux/tasks/taskSelector';
import 'react-sweet-progress/lib/style.css';
import style from './ProgressBar.module.css';

const ProgressBar = ({ userPoints, countPoints }) => {
  // const percent = parseFloat((userPoints / countPoints) * 100);
  let percent = 100;
  if (countPoints) {
    percent = parseFloat((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  // const awardsPoints = useSelector(state => state.awards.totalPoints);
  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>Набрано балiв: </p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>
              {userPoints} / {countPoints}
            </span>
          </p>
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
