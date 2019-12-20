import React from 'react';
import PropTypes from 'prop-types';
import s from './CurrentWeekRange.module.css';

// const CurrentWeekRange = () => (
//   <div className={s.wrapper}>
//     <p className={s.week}>Тиждень: {weekDay}-13 жовтня</p>
//   </div>
// );

// export default CurrentWeekRange;

const CurrentWeekRange = ({
  dayFrom = new Date('2019-12-16T02:00:00.000Z'),
  dayTo = new Date('2019-12-21T22:59:59.000Z'),
}) => {
  // функция получения дней недели (от и до какой даты) из того, что в сторе
  const dateStart = dayFrom.getDate();
  const dateTo = dayTo.getDate();

  // функция получения месяца, из того что в сторе
  function getThisMonth() {
    const monthes = [
      'сiчня',
      'лютого',
      'березеня',
      'квiтня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересеня',
      'жовтня',
      'листопадя',
      'грудня',
    ];

    return monthes[dayFrom.getMonth()];
  }
  const month = getThisMonth(dayFrom);

  return (
    <div className={s.wrapper}>
      <p className={s.week}>
        Тиждень: {dateStart}-{dateTo} {month}
      </p>
    </div>
  );
};

CurrentWeekRange.propTypes = {
  // dateStart: PropTypes.string.isRequired,
  // dateTo: PropTypes.string.isRequired,
  dayFrom: PropTypes.string.isRequired,
  dayTo: PropTypes.string.isRequired,
};

export default CurrentWeekRange;
