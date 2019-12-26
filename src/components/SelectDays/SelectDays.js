/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { changeTasksPlanningOperation } from '../../redux/tasks/tasksOperations';
// import { taskUpdate } from '../../services/api';
// import { fetchingTask } from '../CardsList/CardsListModule';
import DaysList from '../DaysList/DaysList';
import s from './SelectDays.module.css';
import { ReactComponent as AddPlusButton } from '../../assets/icons/card/add-plus-button.svg';

const SelectDays = props => {
  const [showDayList, setShowDayList] = useState(false);
  // const items = useSelector(store => store.tasks.items);
  const { id } = props;

  const toggleDayList = () => {
    setShowDayList(ps => !ps);
  };

  const onHandleClick = taskId => {
    toggleDayList();
    console.log('id :', taskId);

    // const taskInfo = items.find(el => el._id === id);
    // const updateTaskDays = [...taskInfo.days];
    // console.log('updateTaskDays', updateTaskDays);
    // const dayIndex = new Date(1577272964056).getDay() - 1;
    // console.log('dayIndex :', dayIndex);
    // console.log('updateTaskDays[dayIndex] :', updateTaskDays[dayIndex]);
    // updateTaskDays[dayIndex].isActive = !updateTaskDays[dayIndex].isActive;
    // console.log('updateTaskDays', updateTaskDays);

    // changeTasksPlanningOperation(id);
    // const task = fetchingTask(items, id);

    // taskUpdate(id, task);
  };

  return (
    <>
      {!showDayList ? (
        <button onClick={toggleDayList} type="button" className={s.select_days}>
          <AddPlusButton className={s.addPlusButton} width="12" height="12" />
        </button>
      ) : (
        <button
          onClick={() => onHandleClick(id)}
          type="submit"
          className={s.select_days}
        >
          <span className={s.select_days_span}>OK</span>
        </button>
      )}
      {showDayList && <DaysList {...props} />}
    </>
  );
};

export default SelectDays;
