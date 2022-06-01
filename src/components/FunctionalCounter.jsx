import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

const FunctionalCounter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `clicked: ${count} times`
    console.log('document is updating')
  }, [count])

  return (
    <>
      <h2>Name: {name} </h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={{ display: 'inline-block', margin: '2rem' }}
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </>
  )
}

export default FunctionalCounter
