import { useState, useEffect } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      setMinutes(25);
      setSeconds(0);
      setReset(true);
    } else {
      return;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (start) {
        if (seconds === 0) {
          setSeconds(60);
          setMinutes((minutes) => minutes - 1);
        }
        if (minutes === 0 && seconds === 0) {
          alert('Time is up!');
          setMinutes(25);
          setSeconds(60);
        }
        setSeconds((seconds) => seconds - 1);
      }
      if (!start) {
        clearInterval(interval);
      }
      if (reset) {
        setMinutes(25);
        setSeconds(60);
        setReset(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds, start, reset]);

  return (
    <>
      <h1 className="heading-1">Pomodoro timer</h1>
      <div className="container">
        <Stopwatch minutes={minutes} seconds={seconds} />
        <section className="btn-container">
          <button onClick={() => setStart(!start)} className="btn btn__start">
            {start ? 'Stop' : 'Start'}
          </button>
          <button onClick={() => setReset(true)} className="btn btn__reset">
            Reset
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
