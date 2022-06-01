import { useCount, useCountAction } from './CountProvider'
import { useContext } from 'react'

const CountOne = () => {
  const count = useCount() // state
  // const { addOne, addFive, decrement } = useCountAction() //setState()
  const dispatch = useCountAction()

  return (
    <div>
      <p>Count is : {count}</p>
      <button style={{ margin: '1rem' }} onClick={() => dispatch({ type: 'add', value: 1 })}>
        add One
      </button>
      <button style={{ margin: '1rem' }} onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
    </div>
  )
}

export default CountOne
