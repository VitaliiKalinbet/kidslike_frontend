import React, { Component } from 'react';
import propTypes from 'prop-types';
// import shortid from 'shortid';
import imageRobot from '../../assets/images/imageRobot.png';
import { ReactComponent as Cancel } from '../../assets/icons/close/cancel.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon edit/edit-24px.svg';

import style from './NewTaskModal.module.css';

export default class NewTaskModal extends Component {
  state = {
    // text: '',
  };

  static propTypes = {
    onClose: propTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode !== 27) {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { text } = this.state;
    const { onClose } = this.props;
    return (
      <div
        className={style.overlay}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={style.taskModal}>
          <div className={style.taskImage}>
            <button
              onClick={onClose}
              type="button"
              className={style.taskCloseButton}
            >
              <Cancel />
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
