import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { TimerButton } from './components/TimerButton';
import { PomodoroTimer } from './components/PomodoroTimer';
import { ArrowCounterclockwise } from 'react-bootstrap-icons';

const WORK = 1500;
const SHORT_BREAK = 300;
const LONG_BREAK = 900;

// The Pomodoro Loop
// W - S x 4
// W - L

function App() {
  const [timeRemaining, setTimeRemaining] = useState(1500);
  const [currentRound, setCurrentRound] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const incrementRound = () => setCurrentRound(prev => prev === 9 ? 0 : prev + 1);

  let intervalTimer: any = useRef(null);

  const toggleIsRunning = () => setIsRunning(prev => !prev);

  const startTimer = () => {
    intervalTimer.current = setInterval(() => setTimeRemaining(prevState => prevState > 0 ? prevState - 1 : 0), 1000);
    toggleIsRunning();
  };

  const stopTimer = () => {
    clearInterval(intervalTimer.current);
    toggleIsRunning();
  };


  const confirmReset = () => {
    if (window.confirm('Are you sure you want reset the time for this round?')) {
      stopTimer();
      setTimerForRound(currentRound);
    }
  };

  const nextRound = () => {
    // Confirm user wants to skip
    incrementRound();
  };

  useEffect(() => setTimerForRound(currentRound), [currentRound]);

  const confirmSkip = () => {
    if (window.confirm('Are you sure you want to skip this round?')) {
      nextRound();
    }
  };

  const setTimerForRound = (currentRound: number) => {
    if (currentRound === 9) {
      setTimeRemaining(LONG_BREAK);
    } else if (currentRound % 2 === 0) {
      setTimeRemaining(WORK);
    } else if (currentRound % 2 === 1) {
      setTimeRemaining(SHORT_BREAK);
    }
  };

  useEffect(() => {
    if (timeRemaining === 0) {
      stopTimer();
      nextRound();
    }
  }, [timeRemaining]);

  // Pomodoro Timer on click - isRunning ? stopTimer() : startTimer()


  return (
    <div className="App">
      <header className={`App-header ${isRunning ? 'green' : ''}`}>
        <PomodoroTimer handleTimerInteraction={() => isRunning ? stopTimer() : startTimer()} isRunning={isRunning} timeLeft={timeRemaining} />
        <div className="controls-row">
          <TimerButton type="reset" isRunning={isRunning} onButtonClick={() => confirmReset()} />
          <TimerButton type="next" isRunning={isRunning} onButtonClick={() => confirmSkip()} />
        </div>

      </header>
    </div>
  );
}

export default App;
