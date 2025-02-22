import { useState } from 'react';

export const useTest = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return {
    count,
    increment,
  };
};