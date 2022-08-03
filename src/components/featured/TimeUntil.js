import { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const renderCountDown = (time, value) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{time}</div>
        <div className="countdown_tag">{value}</div>
      </div>
    );
  };

  const getTimeUntil = useCallback(deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date passed!');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeUntil('Mar, 11, 2023, 00:00:00');
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeUntil]);

  const { days, hours, minutes, seconds } = time;

  return (
    <Slide direction="left" triggerOnce>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in...</div>
        <div className="countdown_bottom">
          {renderCountDown(days, 'Days')}
          {renderCountDown(hours, 'hours')}
          {renderCountDown(minutes, 'Minutes')}
          {renderCountDown(seconds, 'Seconds')}
        </div>
      </div>
    </Slide>
  );
};
export default TimeUntil;
