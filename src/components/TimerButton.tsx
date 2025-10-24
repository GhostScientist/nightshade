import { FC } from 'react';
import { RotateCcw, SkipForward } from 'lucide-react';

type TimerButtonProps = {
    isRunning: boolean;
    type: string;
    onButtonClick: () => void;
};

export const TimerButton: FC<TimerButtonProps> = ({ isRunning, type, onButtonClick }) => (
    <button 
        onClick={onButtonClick}
        className={`
            btn btn-circle btn-lg
            shadow-lg
            transition-all duration-300
            hover:scale-110
            active:scale-95
            ${isRunning ? 'btn-accent' : 'btn-error'}
        `}
    >
        {type === "reset" && <RotateCcw size={28} />}
        {type === "next" && <SkipForward size={28} />}
    </button>
);
