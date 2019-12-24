import React, { Component } from 'react';
import styles from '../../pages/PlanningPage/Planning.module.css';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

class AddCustomTask extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal } = this.state;
    return (
      <>
        <p className={styles.hiddenText}>
          Хочеш отримати більше призів - додай завдання
          <span role="img" aria-label="	SMILING FACE WITH SMILING EYES">
            &#128522;
          </span>
        </p>

        <button
          onClick={this.openModal}
          className={styles.addTaskBtn}
          type="button"
        >
          &#43;
        </button>
        {isOpenModal && <NewTaskModal onClose={this.closeModal} />}
      </>
    );
  }
}

export default AddCustomTask;
