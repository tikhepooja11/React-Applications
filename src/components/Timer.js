// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [milliseconds, setMilliseconds] = useState(0);

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setMilliseconds(milliseconds + 100);
//     }, 100);

//     return () => clearInterval(timerInterval);
//   }, [milliseconds]);

//   const handleReset = () => {
//     setMilliseconds(0);
//   };

//   const formatTime = (time) => {
//     console.log(time);

//     const minutes = Math.floor(time / 60000);
//     const seconds = Math.floor((time % 60000) / 1000);
//     const centiseconds = Math.floor((time % 1000) / 10);

//     return `${minutes}m ${seconds}s ${centiseconds}ms`;
//   };

//   return (
//     <div>
//       <div className="bg-sky-200 h-50 w-50 text-center p-5 m-5">
//         <h1 className="font-bold">Timer: {formatTime(milliseconds)}</h1>
//         <button
//           className="bg-green-500  p-4 mx-auto mt-8  rounded-lg"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;
import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const buttonClassName = isRunning
    ? "p-2 m-2 bg-red-600"
    : "p-2 m-2 bg-green-400";

  return (
    <div className="p-2 m-2 mx-auto my-20 bg-green-100 text-center">
      <h1>Stopwatch</h1>
      <p className="m-5 font-bold">Time: {time} seconds</p>
      <button className={buttonClassName} onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="bg-pink-200 p-2 m-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
