import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WeekTabsMobile from '../../components/WeekTabsMobile/WeekTabsMobile';
import WeekTabsTablet from '../../components/WeekTabsTablet/WeekTabsTablet';
import WeekTabsDesktop from '../../components/WeekTabsDesktop/WeekTabsDesktop';
import days from '../../utils/days.json';
import windowWidth from '../../utils/windowWidth';
import WeekTabsContent from '../../components/WeekTabsContent/WeekTabsContent';
import s from './MainPage.module.css';

export default class MainPage extends Component {
  static propTypes = {
    history: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { history } = this.props;
    const weekDay = moment().format('dddd');

    history.replace({
      pathname: '/',
      search: `?day=${weekDay.toLowerCase()}`,
    });
  }

  render() {
    return (
      <div className={s.mainDiv}>
        {windowWidth < 768 && <WeekTabsMobile days={days} />}
        {windowWidth >= 768 && windowWidth < 1280 && (
          <WeekTabsTablet days={days} />
        )}
        {windowWidth >= 1280 && <WeekTabsDesktop days={days} />}
        <WeekTabsContent />
      </div>
    );
  }
}
