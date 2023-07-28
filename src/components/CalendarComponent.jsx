import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CalendarComponent = ({ testData, handleDayChange, currentDay }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarElement = calendarRef.current;

    const handleMouseWheel = (event) => {
      calendarElement.scrollLeft += event.deltaY;
    };

    const handleSwipe = (event) => {
      calendarElement.scrollLeft += event.deltaX;
    };

    calendarElement.addEventListener('wheel', handleMouseWheel);
    calendarElement.addEventListener('mousedown', (event) => {
      if (event.button === 0) {
        calendarElement.addEventListener('mousemove', handleSwipe);
      }
    });
    calendarElement.addEventListener('mouseup', () => {
      calendarElement.removeEventListener('mousemove', handleSwipe);
    });

    return () => {
      calendarElement.removeEventListener('wheel', handleMouseWheel);
      calendarElement.removeEventListener('mousemove', handleSwipe);
    };
  }, []);

  return (
    <div className="reminder__calendar" ref={calendarRef}>
      {testData.map((data, index) => (
        <div
          key={index}
          className={
            index === 0
              ? 'calendar__item current selected'
              : currentDay === data
              ? 'calendar__item selected'
              : 'calendar__item'
          }
          onClick={() => handleDayChange(data)}>
          <div className="item__wrapper">
            <div className="item__weekday">{data.weekday}</div>
            <div className="item__day">{data.day}</div>
          </div>
          <div className="item__progress">
            {data.tasks.some((task) => task.done) ? <div className="progress__done"></div> : null}
            {data.tasks.some((task) => task.done === false) ? (
              <div className="progress__undone"></div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

CalendarComponent.propTypes = {
  testData: PropTypes.array.isRequired,
  handleDayChange: PropTypes.func.isRequired,
  currentDay: PropTypes.object.isRequired
};

export default CalendarComponent;
