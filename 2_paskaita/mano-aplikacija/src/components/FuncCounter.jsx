import { useState } from 'react';

const FuncCounter = () => {
  const [count, setCount] = useState(0); //naudojama useState hooks funkcija iš React, kad būtų galima laikyti skaičiaus
  // būseną ir atnaujinti ją. Pradinė count būsena nustatoma į 0.

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset count</button>
    </div>
  );
};

export default FuncCounter;
