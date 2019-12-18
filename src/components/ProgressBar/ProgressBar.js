import React from 'react';
import { Progress } from 'react-sweet-progress';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = () => {
  return (
    <div className={style.Progress}>
      <Progress percent={88} />
    </div>
  );
};

export default ProgressBar;
