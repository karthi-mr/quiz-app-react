import { useState, useEffect, type ReactElement } from "react";

type QuestionTimerProps = {
  timeout: number,
  onTimeout: () => void;
};

export default function QuestionTimer(
  { 
    timeout, 
    onTimeout 
  }: QuestionTimerProps
): ReactElement {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    const timeoutFn = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutFn);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalFn = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
    }, 100);

    return () => {
      clearInterval(intervalFn);
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}