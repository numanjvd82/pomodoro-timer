import React from 'react';
import './Stopwatch.css';

interface StopwatchProps {
  minutes: number;
  seconds: number;
}

const Stopwatch = ({ minutes, seconds }: StopwatchProps) => {
  return (
    <div className="stopwatch">
      <div className="stopwatch__time stopwatch__minutes">
        <span className="time stopwatch__minutes-time"> {minutes}</span>
        <h1 className="label stopwatch__minutes-label">Minutes</h1>
      </div>
      <div className="stopwatch__time stopwatch__seconds">
        <span className="time stopwatch__seconds-time">
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </span>
        <h1 className="label stopwatch__seconds-label">Seconds</h1>
      </div>
    </div>
  );
};

export default Stopwatch;
