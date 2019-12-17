import React from 'react';
import styles from './Planning.module.css';
import PlanningPoints from '../../components/PlanningPage/PlanningPoints';
import AddCustomTask from '../../components/PlanningPage/AddCustomTask';

const PlanningPage = () => {
  return (
    <div className={styles.planningContainer}>
      <ul className={styles.list}>
        <li className={styles.listItem}>First</li>
        <li className={styles.listItem}>Second</li>
        <li className={styles.listItem}>Third</li>
        <li className={styles.listItem}>Fourth</li>
        <li className={styles.listItem}>First</li>
        <li className={styles.listItem}>Second</li>
        <li className={styles.listItem}>Third</li>
        <li className={styles.listItem}>Fourth</li>
      </ul>
      <div className={styles.pointsTaskContainer}>
        <AddCustomTask />
        <PlanningPoints />
      </div>
    </div>
  );
};

export default PlanningPage;
