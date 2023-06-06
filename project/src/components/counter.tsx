import { useState } from 'react';
import classes from './counter.module.sass';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
