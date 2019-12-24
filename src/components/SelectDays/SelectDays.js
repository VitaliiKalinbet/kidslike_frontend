import React, { Component } from 'react';
import DaysList from '../DaysList/DaysList';
import s from './SelectDays.module.css';
import { ReactComponent as AddPlusButton } from '../../assets/icons/card/add-plus-button.svg';

export default class SelectDays extends Component {
  state = {
    showDayList: false,
  };

  toggleDayList = () => {
    this.setState(state => ({ showDayList: !state.showDayList }));
  };

  render() {
    const { showDayList } = this.state;
    return (
      <>
        {!showDayList ? (
          <button
            onClick={this.toggleDayList}
            type="button"
            className={s.select_days}
          >
            <AddPlusButton className={s.addPlusButton} width="12" height="12" />
          </button>
        ) : (
          <button
            onClick={this.toggleDayList}
            type="submit"
            className={s.select_days}
          >
            <span className={s.select_days_span}>OK</span>
          </button>
        )}
        {showDayList && <DaysList {...this.props} />}
      </>
    );
  }
}
