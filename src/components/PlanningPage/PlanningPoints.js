import React from 'react';
import styles from '../../pages/PlanningPage/Planning.module.css';

const PlanningPoints = () => {
  return (
    <p className={styles.pointsText}>
      <span className={styles.hiddenSpan}>Визначено завдань на</span>
      <span className={styles.pointsAmount}>333</span>
      бали
    </p>
  );
};

export default PlanningPoints;
