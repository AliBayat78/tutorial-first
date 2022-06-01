import { useEffect, useRef } from 'react'
import { useState } from 'react/cjs/react.development'

const FunctionalRef = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  const previousCount = useRef()
  const previousValue = useRef()

  const inputRef = useRef()

  useEffect(() => {
    previousValue.current = name // do not re render the component
    console.log(previousValue.current)
  }, [name])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    previousCount.current = count
  }, [count])

  return (
    <div>
      <h4>
        Your Current Name: {name} / Your Previous Name: {previousValue.current}
      </h4>
      <input
        style={{ background: 'cyan' }}
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        ref={previousValue}
        ref={inputRef}
      />
      <h4>Count: {count}</h4>
      <h4>Previous-Count: {previousCount.current}</h4>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))} ref={previousCount}>
        Generate
      </button>
    </div>
  )
}

export default FunctionalRef
