import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Planning.module.css';
import PlanningPoints from '../../components/PlanningPage/PlanningPoints';
import ContainerList from '../../components/CardsList';
import CurrentWeekPlaning from '../../components/CurrentWeekPlaning/CurrentWeekPlaning';
import AddCustomTask from '../../components/PlanningPage/AddCustomTask';

const PlanningPage = () => {
  const tasks = useSelector(state => state.tasks.items);

  return (
    <div className={styles.planningContainer}>
      <CurrentWeekPlaning />
      <div className={styles.list}>
        {tasks && <ContainerList arr={tasks} />}
      </div>
      <div className={styles.pointsTaskContainer}>
        <AddCustomTask />
        <PlanningPoints />
      </div>
    </div>
  );
};

export default PlanningPage;
