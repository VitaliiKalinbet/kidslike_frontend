import React, { Component } from 'react';
// import shortid from 'shortid';
import imageRobot from '../../assets/images/imageRobot.png';
import { ReactComponent as Cancel } from '../../assets/icons/close/cancel.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon edit/edit-24px.svg';

import style from './NewTaskModal.module.css';

class NewTaskModal extends Component {
  state = {
    // isOpenModal: false,
    // text: '',
  };

  closeModal = () => {};

  handleChange = () => {};

  handleSubmit = () => {};

  render() {
    const { text } = this.state;
    return (
      <div onClose={this.onClose} className={style.overlay}>
        <div className={style.taskModal}>
          <div className={style.taskImage}>
            <button
              onClick={this.closeModal}
              type="button"
              className={style.taskCloseButton}
            >
              {' '}
              <Cancel />{' '}
            </button>
            <img src={imageRobot} alt="robot" />
          </div>
          <div className={style.taskForm}>
            <form className={style.form} onSubmit={this.handleSubmit}>
              <Edit className={style.taskIconEdit} />
              <input
                className={style.taskInput}
                placeholder="Додати завдання..."
                type="text"
                name="text"
                value={text}
                onChange={this.handleChange}
              />
              <button className={style.taskSubmitButton} type="submit">
                Ок
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTaskModal;
