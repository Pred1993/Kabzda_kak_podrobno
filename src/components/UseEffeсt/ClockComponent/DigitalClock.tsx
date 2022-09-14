import React from 'react';

const dateRebranding = (num: number) => (num < 10 ? '0' + num : num);
type DigitalClockPropsType = {
    data: Date
}
const DigitalClock = ({data}:DigitalClockPropsType) => {
    return (
        <>
            <span>{dateRebranding(data.getHours())}</span>
            :<span>{dateRebranding(data.getMinutes())}</span>
            :<span>{dateRebranding(data.getSeconds())}</span>
        </>
    );
};

export default DigitalClock;