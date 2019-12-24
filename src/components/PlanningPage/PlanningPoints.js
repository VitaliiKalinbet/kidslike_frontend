import React from 'react';
import styles from '../../pages/PlanningPage/Planning.module.css';

const PlanningPoints = () => (
  <p className={styles.pointsText}>
    <span className={styles.hiddenSpan}>Визначено завдань на</span>
    <span className={styles.pointsAmount}>0</span>
    бали
  </p>
);

export default PlanningPoints;
