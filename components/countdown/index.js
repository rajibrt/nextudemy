import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
export default function Countdown({ date }) {
  const [timeInMs, setTimeInMs] = useState(date.getTime());
  useEffect(() => {
    setTimeout(date.getTime());
  }, [date]);
  const [remainingTime, setRemainingTime] = useState();
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, [date]);
  return (
    <div className={styles.countdown}>
      <span>1</span>
      <span>2</span>
      <b>:</b>
      <span>3</span>
      <span>4</span>
      <b>:</b>
      <span>5</span>
      <span>0</span>
      <b>:</b>
      <span>5</span>
      <span>0</span>
    </div>
  );
}
