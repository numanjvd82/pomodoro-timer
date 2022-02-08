import { useState, useEffect } from 'react';
import Stopwatch from './components/Stopwatch';
import Sidebar from './components/Sidebar';
import { HiMenu } from 'react-icons/hi';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      setMinutes(25);
      setSeconds(0);
      setReset(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      // If seconds is 0, set minutes to minutes - 1
      if (start) {
        if (seconds === 0) {
          setSeconds(60);
          setMinutes((minutes) => minutes - 1);
        }
        // if seconds and minutes are both === 0 then we reset the timer with the alert
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
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds, start]);

  return (
    <>
      <HiMenu
        style={{ margin: '0.5rem 1.5rem' }}
        onClick={() => setSidebar(true)}
        className="menu-btn sidebar__header-open"
        fontSize={36}
      />
      {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      <h1 className="heading-1">Pomodoro timer</h1>
      <div className="container">
        <Stopwatch minutes={minutes} seconds={seconds} />
        <section className="btn-container">
          <button onClick={() => setStart(!start)} className="btn btn__start">
            {start ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleReset} className="btn btn__reset">
            Reset
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
