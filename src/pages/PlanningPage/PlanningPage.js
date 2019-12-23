import React from 'react';
import styles from './Planning.module.css';
import PlanningPoints from '../../components/PlanningPage/PlanningPoints';
import CardsList from '../../components/CardsList';

import AddCustomTask from '../../components/PlanningPage/AddCustomTask';

const PlanningPage = () => {
  return (
    <div className={styles.planningContainer}>
      <div className={styles.list}>
        <CardsList />{' '}
      </div>

      <div className={styles.pointsTaskContainer}>
        <AddCustomTask />
        <PlanningPoints />
      </div>
    </div>
  );
};

export default PlanningPage;
