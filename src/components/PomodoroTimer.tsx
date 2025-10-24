import { FC } from 'react';

type PomodoroTimerProps = {
    handleTimerInteraction: () => void;
    isRunning: boolean;
    timeLeft: number;
};

export const PomodoroTimer: FC<PomodoroTimerProps> = ({ 
    handleTimerInteraction, 
    isRunning, 
    timeLeft 
}) => {
    
    const formatTimeRemaining = (timeLeftInSeconds: number): string => {
        const minutesRemaining = Math.floor(timeLeftInSeconds / 60);
        const secondsRemaining = timeLeftInSeconds - (minutesRemaining * 60);
        const time = ('0' + minutesRemaining).slice(-2) + ':' + ('0' + secondsRemaining).slice(-2);
        return time;
    };
    
    return (
        <div 
            onClick={handleTimerInteraction} 
            className={`
                cursor-pointer select-none
                bg-white/20 backdrop-blur-sm
                rounded-3xl px-16 py-12
                shadow-2xl
                transition-all duration-300
                hover:bg-white/30 hover:scale-105
                active:scale-95
                ${isRunning ? 'animate-pulse' : ''}
            `}
        >
            <h1 className="text-white text-8xl md:text-9xl font-bold font-mono tracking-wider">
                {formatTimeRemaining(timeLeft)}
            </h1>
            <p className="text-white/80 text-xl mt-4 font-medium">
                {isRunning ? 'Click to Pause' : 'Click to Start'}
            </p>
        </div>
    );
};
