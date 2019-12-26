import React from 'react';
import { useSelector } from 'react-redux';
import windowWidth from '../../utils/windowWidth';
import styles from './Planning.module.css';
import mobileStyles from './PlanningMobile.module.css';
import PlanningPoints from '../../components/PlanningPage/PlanningPoints';
import MobilePlanningPoints from '../../components/PlanningPage/MobilePlanningPoints';
import ContainerList from '../../components/CardsList';
import CurrentWeekPlaning from '../../components/CurrentWeekPlaning/CurrentWeekPlaning';
import MobileCurrentWeekPlaning from '../../components/CurrentWeekPlaning/MobileCurrentWeekPlanning';
import AddCustomTask from '../../components/PlanningPage/AddCustomTask';
import MobileAddCustomTask from '../../components/PlanningPage/MobileAddCustomTask';

const PlanningPage = () => {
  const tasks = useSelector(state => state.tasks.items);

  return (
    <div className={styles.planningContainer}>
      {windowWidth < 768 && <MobileCurrentWeekPlaning />}
      {windowWidth >= 768 && (
        <div className={styles.pointsTaskContainer}>
          <CurrentWeekPlaning />
          <div className={styles.secondTaskContainer}>
            <>
              <PlanningPoints />
              <AddCustomTask />
            </>
          </div>
        </div>
      )}
      <div className={styles.list}>
        {tasks && <ContainerList arr={tasks} />}
      </div>
      {windowWidth < 768 && (
        <div className={mobileStyles.MobilePointsTaskContainer}>
          <MobilePlanningPoints />
          <MobileAddCustomTask />
        </div>
      )}
    </div>
  );
};

export default PlanningPage;
