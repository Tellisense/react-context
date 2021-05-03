import React, { useState } from 'react'

const Component1 = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  if (counter === 5) {
    // Simulate a JS error
    throw new Error("I crashed the buggy app!");
  }


  return (
    <div onClick={handleClick} style={{ padding: 100 }}>
      new UI2 Component1
      {counter}
    </div>
  )
}

export default Component1
