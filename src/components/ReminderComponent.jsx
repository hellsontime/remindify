import ReminderContainer from '../containers/ReminderContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import testData from '../constants/testdata';
import EmptyTasksComponent from './EmptyTasksComponent';
import NotificationsComponent from './NotificationsComponent';
import notifications from '../constants/notifications';

function ReminderComponent() {
  const [currentDay, setCurrentDay] = useState(testData[0]);

  const handleDayChange = (data) => {
    setCurrentDay(data);
    console.log(data);
  };

  const handleTaskToggle = (taskIndex) => {
    const updatedTasks = [...currentDay.tasks];
    updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
    setCurrentDay((prevDay) => ({
      ...prevDay,
      tasks: updatedTasks
    }));
  };

  return (
    <ReminderContainer>
      <div className="reminder__header">
        <div className="header__logo">
          Remindi<span>fy</span>
        </div>
        <div className="header__buttons">
          <div className="btn__notifications">
            <FontAwesomeIcon icon={faBell} />
            {notifications.length > 0 ? (
              <div className="notifications__count">{notifications.length}</div>
            ) : null}

            <NotificationsComponent notifications={notifications} />
          </div>
          <div className="btn__menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>

      <CalendarComponent
        testData={testData}
        handleDayChange={handleDayChange}
        currentDay={currentDay}
      />

      <div className="reminder__tasks-wrapper">
        <div className="reminder__tasks">
          {currentDay.tasks.length === 0 ? (
            <EmptyTasksComponent />
          ) : (
            currentDay.tasks.map((task, index) => (
              <div
                onClick={() => handleTaskToggle(index)}
                className="tasks__item"
                key={index + '' + task.day}>
                <div className={task.done ? 'item__checkbox checked' : 'item__checkbox'}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="item__title">{task.title}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </ReminderContainer>
  );
}

export default ReminderComponent;
