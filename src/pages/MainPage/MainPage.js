import React from 'react';
import WeekTabsMobile from '../../components/WeekTabsMobile/WeekTabsMobile';
import WeekTabsTablet from '../../components/WeekTabsTablet/WeekTabsTablet';
import WeekTabsDesktop from '../../components/WeekTabsDesktop/WeekTabsDesktop';
import days from '../../utils/days.json';
import windowWidth from '../../utils/windowWidth';
import WeekTabsContent from '../../components/WeekTabsContent/WeekTabsContent';
// import moduleName from '../../components/';
import s from './MainPage.module.css';

const MainPage = () => (
  <div className={s.mainDiv}>
    {windowWidth < 768 && <WeekTabsMobile days={days} />}
    {windowWidth >= 768 && windowWidth < 1280 && <WeekTabsTablet days={days} />}
    {windowWidth >= 1280 && <WeekTabsDesktop days={days} />}
    <WeekTabsContent />
  </div>
);

export default MainPage;
