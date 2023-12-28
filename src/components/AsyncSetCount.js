import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementAsync = () => {
    setTimeout(() => {
      // Using the functional form of setCount to capture the current state
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Delayed by 1000 milliseconds (1 second)

    //  setCount(count+1) To implement in sync pasion
  };

  return (
    <div>
      <button onClick={incrementAsync}>Increment After 1 Second</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;

// incrementAsync function uses setTimeout to simulate an asynchronous operation.
// Inside the setTimeout callback, the functional form of setCount is used to ensure that
// the update is based on the current state. This is a common pattern to handle asynchronous state updates in React.
