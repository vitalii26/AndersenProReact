import { useCallback, useMemo, useState, memo } from "react";
import "./CallbackMemo.css";

const Callback = () => {
  const [num, setNum] = useState(0);
  const [factNum, setFactNum] = useState(1);

  console.log("render parent");
  const memoizedHandleClick = useCallback(
    () => setNum((state) => (state += 1)),
    []
  );

  const memoizedFactorialHandleClick = useCallback(
    () => setFactNum((state) => (state += 1)),
    []
  );

  const getFactorial = useCallback((val) => {
    if (val === 0) return 1;
    return val * getFactorial(val - 1);
  }, []);

  const calculatedFactorial = useMemo(() => {
    return factNum ? getFactorial(factNum) : 0;
  }, [factNum, getFactorial]);

  return (
    <div className="callback-wrapper">
      <p>
        Increment count: {num}, Factorial count: {factNum}
      </p>
      <Button onClick={memoizedHandleClick}>+1</Button>
      <Button
        onClick={memoizedFactorialHandleClick}
        factorial={calculatedFactorial}
      ></Button>
    </div>
  );
};

const Button = memo(({ children, onClick, factorial }) => {
  console.log("render button");
  return (
    <button onClick={onClick}>
      {children}
      {factorial}
    </button>
  );
});

export default Callback;
