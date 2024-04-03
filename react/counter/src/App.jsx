import { useState, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Increment Count
    </button>
  );
};

export default App;
