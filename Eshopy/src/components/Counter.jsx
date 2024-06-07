// Filename - App.js

import React, { useState } from "react";

// Importing app.css is css file to add styling

const Counter = (stock ) => {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(1);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    if (counter <stock) 
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter != 0) 
    setCounter(counter - 1);
  };

  return (
    <p className="fs-3">
      <button onClick={handleClick2} className="fs-3 cnt me-1">
        -
      </button>
      {counter}
      <button onClick={handleClick1} className="fs-3 cnt">
        +
      </button>
    </p>
  );
};

export default Counter;
