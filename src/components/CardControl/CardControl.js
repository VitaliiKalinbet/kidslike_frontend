import React from 'react';
import TaskToggle from '../TaskToggle/TaskToggle';
import SelectDays from '../SelectDays/SelectDays';

const CardControl = () => {
  return (
    <div>
      <TaskToggle />
      <SelectDays />
    </div>
  );
};

export default CardControl;
