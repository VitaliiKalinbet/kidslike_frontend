import React from 'react';
import { Progress } from 'react-sweet-progress';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = ({ points }) => {
  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>Набрано балiв: </p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>{points} / 0</span>
          </p>
          <Progress percent={points} />
        </div>
      </div>
    </>
  );
};
ProgressBar.propTypes = {
  points: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  points: state.auth.user.points,
});

export default connect(mapStateToProps)(ProgressBar);
