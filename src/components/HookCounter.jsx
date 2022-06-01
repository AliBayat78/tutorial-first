import { useState } from 'react'

const HookCounter = () => {
  const [count, setCount] = useState(0)

  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2)
  }

  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={addTwoHandler}>Add Two</button>
      <button onClick={addFiveHandler}>Add Five</button>
    </div>
  )
}

export default HookCounter
