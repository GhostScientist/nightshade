import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import { TimerButton } from './components/TimerButton';
import { PomodoroTimer } from './components/PomodoroTimer';

const WORK = 1500;
const SHORT_BREAK = 300;
const LONG_BREAK = 900;

// The Pomodoro Loop
// W - S x 4
// W - L

function App() {
  const [timeRemaining, setTimeRemaining] = useState(WORK);
  const [currentRound, setCurrentRound] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const incrementRound = () => setCurrentRound(prev => prev === 9 ? 0 : prev + 1);

  const intervalTimer = useRef<number | null>(null);

  const toggleIsRunning = () => setIsRunning(prev => !prev);

  const startTimer = () => {
    intervalTimer.current = window.setInterval(() => 
      setTimeRemaining(prevState => prevState > 0 ? prevState - 1 : 0), 
      1000
    );
    toggleIsRunning();
  };

  const stopTimer = () => {
    if (intervalTimer.current) {
      clearInterval(intervalTimer.current);
    }
    toggleIsRunning();
  };

  const confirmReset = () => {
    if (window.confirm('Are you sure you want to reset the time for this round?')) {
      stopTimer();
      setTimerForRound(currentRound);
    }
  };

  const nextRound = () => {
    incrementRound();
  };  

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

  const handleStopTimer = useCallback(() => {
    if (intervalTimer.current) {
      clearInterval(intervalTimer.current);
    }
    setIsRunning(false);
  }, []);

  const handleNextRound = useCallback(() => { 
    incrementRound(); 
  }, []);

  useEffect(() => {
    setTimerForRound(currentRound);
  }, [currentRound]);  

  useEffect(() => {
    if (timeRemaining === 0) {
      handleStopTimer();
      handleNextRound();
    }
  }, [timeRemaining, handleStopTimer, handleNextRound]);

  const getRoundType = () => {
    if (currentRound === 9) return 'Long Break';
    return currentRound % 2 === 0 ? 'Work Session' : 'Short Break';
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
      isRunning 
        ? currentRound % 2 === 0 
          ? 'bg-accent' 
          : 'bg-success'
        : currentRound % 2 === 0 
          ? 'bg-primary' 
          : 'bg-error'
    }`}>
      <div className="text-center space-y-8">
        <div className="mb-4">
          <h2 className="text-white text-2xl font-semibold mb-2">{getRoundType()}</h2>
          <div className="flex justify-center gap-1">
            {[0, 2, 4, 6, 8].map((round) => (
              <div 
                key={round}
                className={`w-3 h-3 rounded-full ${
                  currentRound >= round ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
        
        <PomodoroTimer 
          handleTimerInteraction={() => isRunning ? stopTimer() : startTimer()} 
          isRunning={isRunning} 
          timeLeft={timeRemaining} 
        />
        
        <div className="flex gap-4 justify-center">
          <TimerButton 
            type="reset" 
            isRunning={isRunning} 
            onButtonClick={confirmReset} 
          />
          <TimerButton 
            type="next" 
            isRunning={isRunning} 
            onButtonClick={confirmSkip} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
