import { useState, useEffect } from "react";
import "./StateEffect.css";

const Timer = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return <div className="timer">Time is: {time}</div>;
};

export default Timer;
