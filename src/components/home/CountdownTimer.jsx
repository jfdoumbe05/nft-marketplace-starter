import React, { useEffect, useState } from "react";

const CountdownTimer = ({ expiryDate }) => {
    const [currentTime, setCurrentTime] = useState(Date.now());
    useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const timeLeft = expiryDate - currentTime;

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="de_countdown">
      {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default CountdownTimer;