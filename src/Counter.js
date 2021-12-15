import { useCallback, useEffect, useState } from 'react';

const useCount = (initialValue) => {
  let [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(++count)
  }, [count])

  const decrement = useCallback(() => {
    setCount(--count)
  }, [count]) 

  useEffect(() => {
    const automateIncrement = setInterval(() => {
      increment()
    }, 1000);
  
    return () => {
      console.log("Cleanup") 
      clearInterval(automateIncrement);
    }
  }, [])


  return [count, increment, decrement]
}


function Counter() {
  let [count, increment, decrement] = useCount(0);

  return (
    <div className="App">
      <span style={{ "fontSize": "2em" }}>{count}</span>
      <br/>
      <br/>
      <button style={{ "padding": "10px 15px" }}  onClick={() => increment()}>+</button>
      <br/>
      <button style={{ "padding": "10px 15px" }} onClick={() => decrement()}>-</button>
    </div>
  );
}

export default Counter;
