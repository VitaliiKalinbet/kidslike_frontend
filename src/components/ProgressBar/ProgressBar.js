import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import PropTypes from 'prop-types';
import style from './ProgressBar.module.css';

const ProgressBar = ({ userPoints, weekPoints }) => {
  const points = { userPoints };
  const pointsMax = { weekPoints };

  const percent = (points / pointsMax) * 100;

  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>Набрано балiв: </p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>{userPoints}</span>
          </p>
          {<Progress percent={points} /> || <Progress percent={percent} />}
        </div>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  userPoints: PropTypes.number.isRequired,
  weekPoints: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  userPoints: state.auth.user.points,
});

export default connect(mapStateToProps, null)(ProgressBar);
