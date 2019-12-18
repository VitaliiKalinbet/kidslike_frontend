import React from 'react';
import styles from '../../pages/PlanningPage/Planning.module.css';

const AddCustomTask = () => {
  return (
    <>
      <p className={styles.hiddenText}>
        Хочеш отримати більше призів - додай завдання
        <span role="img" aria-label="	SMILING FACE WITH SMILING EYES">
          &#128522;
        </span>
      </p>
      <button className={styles.addTaskBtn} type="button">
        &#43;
      </button>
    </>
  );
};

export default AddCustomTask;
