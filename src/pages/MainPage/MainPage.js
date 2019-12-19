import React from 'react';
import WeekTabsMobile from '../../components/WeekTabsMobile/WeekTabsMobile';
import WeekTabsTablet from '../../components/WeekTabsTablet/WeekTabsTablet';
import WeekTabsDesktop from '../../components/WeekTabsDesktop/WeekTabsDesktop';
import days from '../../utils/days.json';
import windowWidth from '../../utils/windowWidth';

const MainPage = () => (
  <>
    {windowWidth < 768 && <WeekTabsMobile days={days} />}
    {windowWidth >= 768 && windowWidth < 1280 && <WeekTabsTablet days={days} />}
    {windowWidth >= 1280 && <WeekTabsDesktop days={days} />}
  </>
);

export default MainPage;
