import React from 'react';
import { Progress } from 'react-sweet-progress';
import style from './ProgressBar.module.css';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = () => {
  return (
    <>
      <div className={style.Progress}>
        <p className={style.progressText}>Набрано балiв:</p>
        <div className={style.progressBarDiv}>
          <p className={style.progressNumbers}>
            <span>400 / </span>810
          </p>
          <Progress percent={88} />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
