import { FC } from 'react';
import { ArrowCounterclockwise, SkipForward } from 'react-bootstrap-icons';

type TimerButtonProps = {
    isRunning: boolean;
    type: string;
    onButtonClick: Function;
};

export const TimerButton: FC<TimerButtonProps> = ({ isRunning, type, onButtonClick }) => (
    <div className="control-button">
        <button style={{ backgroundColor: isRunning ? '#22AC38' : '#EB1649'}}onClick={() => onButtonClick()}>{type === "reset" && <ArrowCounterclockwise size={50} />}{type === "next" && <SkipForward size={45} />}</button>
    </div>
);