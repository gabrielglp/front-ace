'use client';

import { useEffect, useState } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  };

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const targetDate = new Date("2025-01-01T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center p-4 bg-primary-orange400 text-white shadow-xl">
        <span className="text-4xl font-bold">{(timeLeft as any)[interval]}</span>
        <span className="text-sm uppercase text-white">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex space-x-8 items-center">
      {timerComponents.length ? timerComponents : <span>O evento já ocorreu!</span>}
      <p className="max-w-[26rem]">Participe da nossa comunidade com nossos especialistas
      ainda hoje, com desconto!</p>
    </div>
  );
};

export default Countdown;