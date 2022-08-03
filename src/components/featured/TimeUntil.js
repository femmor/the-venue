import { useState, useEffectm, useCallback, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {
  const renderCountDown = (time, value) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{time}</div>
        <div className="countdown_tag">{value}</div>
      </div>
    );
  };

  const getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    let day;
    if (time < 0) {
      console.log('Date passed!');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeUntil('Mar, 11, 2023, 00:00:00');
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeUntil]);

  return (
    <Slide direction="left" triggerOnce>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in...</div>
        <div className="countdown_bottom">
          {renderCountDown(27, 'Days')}
          {renderCountDown(3, 'hours')}
          {renderCountDown(30, 'Minutes')}
          {renderCountDown(40, 'Seconds')}
        </div>
      </div>
    </Slide>
  );
};
export default TimeUntil;
