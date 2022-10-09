import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(prevCount => prevCount + 1)
  const decrementCount = () => setCount(prevCount => prevCount - 1)

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}
