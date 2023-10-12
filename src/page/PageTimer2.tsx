import React, { useEffect, useState, FC } from 'react';
import moment from 'moment';

interface IProps {
  duration: number;
}

const Timer: FC<IProps> = ({ duration }) => {
  //끝나는 시간 > 10시 0분 0초 + 5초
  const [endTime, setEndTime] = useState<number>(
    new Date().getTime() + duration * 1000
  );

  //받은시간 > 3
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    console.log('2');
    const timerId = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      console.log('1');
      setTimeLeft(duration);
      setEndTime(new Date().getTime() + duration * 1000);
    }
  }, [timeLeft]);

  const calculateTimeLeft = () => {
    const currTime = new Date().getTime(); //10시 0분 0초 + +
    console.log(endTime);
    return endTime - currTime;
  };

  return <>{moment(timeLeft).format('ss')}</>;
};

export default Timer;
