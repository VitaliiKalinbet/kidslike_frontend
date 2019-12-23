import React from 'react';
import shortid from 'shortid';
import s from './TaskToggle.module.css';
import { ReactComponent as CheckSymbol } from '../../assets/icons/card/check-symbol.svg';
import { ReactComponent as Attention } from '../../assets/icons/card/attention.svg';

const TaskToggle = () => {
  const taskId = shortid.generate();
  return (
    <div>
      <label htmlFor={taskId} className={s.switch}>
        <input id={taskId} className={s.checkbox} type="checkbox" />
        <span className={`${s.slider} ${s.round}`}>
          <CheckSymbol className={s.check_symbol} width="12" height="12" />
          <Attention className={s.attention} width="12" height="12" />
        </span>
      </label>
    </div>
  );
};

export default TaskToggle;
