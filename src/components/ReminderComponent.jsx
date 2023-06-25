import ReminderContainer from '../containers/ReminderContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import testData from '../constants/testdata';

function NotFoundComponent() {
  const [currentDay, setCurrentDay] = useState(testData[0]);

  const handleDayChange = (data) => {
    setCurrentDay(data);
  };

  const handleDayClick = (data) => {
    console.log(data);
  };

  return (
    <ReminderContainer>
      <div className="container">
        <div className="reminder__header">
          <div className="header__logo">
            Remindi<span>fy</span>
          </div>
          <div className="header__buttons">
            <div className="btn__notifications">
              <FontAwesomeIcon icon={faBell} />
              <div className="notifications__count">3</div>
            </div>
            <div className="btn__menu">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
      <div className="reminder__calendar">
        <Swiper spaceBetween={25} slidesPerView={5.75}>
          {testData.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className={index === 0 ? 'calendar__item current selected' : 'calendar__item'}
                onClick={() => handleDayClick(data)}>
                <div className="item__wrapper" onClick={() => handleDayChange(data)}>
                  <div className="item__weekday">{data.weekday}</div>
                  <div className="item__day">{data.day}</div>
                </div>
                <div className="item__progress">
                  {data.tasks.some((task) => task.done) ? (
                    <div className="progress__done"></div>
                  ) : null}
                  {data.tasks.some((task) => task.done === false) ? (
                    <div className="progress__undone"></div>
                  ) : null}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="reminder__tasks">
        {currentDay.tasks.map((task, index) => (
          <div className="tasks__item" key={index + '' + task.day}>
            <div className={task.done ? 'item__checkbox checked' : 'item__checkbox'}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="item__title">{task.title}</div>
          </div>
        ))}
      </div>
    </ReminderContainer>
  );
}

export default NotFoundComponent;
