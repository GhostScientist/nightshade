import { time } from 'console';
import { FC } from 'react';

type PomodoroTimerProps = {
    isRunning: boolean;
    timeLeft: number;
};

export const PomodoroTimer: FC<PomodoroTimerProps> = ({ isRunning, timeLeft }) => {
    
    const formatTimeRemaining = (timeLeftInSeconds: number) : string => {
        const minutesRemaining = Math.floor(timeLeftInSeconds / 60);
        const secondsRemaining = timeLeftInSeconds - (minutesRemaining * 60);
        var time=('0'  + minutesRemaining).slice(-2)+':'+('0' + secondsRemaining).slice(-2);
        return `${time}`
    };
    
    return (
        <div className={`timer-container ${isRunning && 'isPlaying'}`}>
            <h1 id='timer-label'>{formatTimeRemaining(timeLeft)}</h1>
        </div>
    );
};