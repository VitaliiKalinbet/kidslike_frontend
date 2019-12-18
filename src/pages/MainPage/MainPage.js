import React from 'react';
import DaysList from '../../components/DaysList/DaysList';
import daysJson from '../../components/DaysList/DaysList.json';

const MainPage = () => {
  return (
    <div>
      <DaysList daysJson={daysJson} />
    </div>
  );
};

export default MainPage;
