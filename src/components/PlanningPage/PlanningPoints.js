import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from '../../pages/PlanningPage/Planning.module.css';
import { getTaskPoints } from '../../redux/tasks/tasksSelector';

const PlanningPoints = ({ taskPoints }) => (
  <p className={styles.pointsText}>
    <span className={styles.hiddenSpan}>Визначено завдань на</span>
    <span className={styles.pointsAmount}>{taskPoints}</span>
    бали
  </p>
);

PlanningPoints.propTypes = {
  taskPoints: propTypes.number.isRequired,
};

const MSTP = state => ({
  taskPoints: getTaskPoints(state),
});

export default connect(MSTP)(PlanningPoints);
