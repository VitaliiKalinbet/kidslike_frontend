import React, { Component } from 'react';
import styles from '../../pages/PlanningPage/Planning.module.css';

class PlanningPoints extends Component {
  state = {
    weekPoints: 0,
  };

  render() {
    const { weekPoints } = this.state;
    return (
      <p className={styles.pointsText}>
        <span className={styles.hiddenSpan}>Визначено завдань на</span>
        <span className={styles.pointsAmount}>{weekPoints}</span>
        бали
      </p>
    );
  }
}

export default PlanningPoints;
