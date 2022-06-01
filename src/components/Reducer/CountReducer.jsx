import { useState } from 'react'
import { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value
    case 'decrement':
      return state - action.value
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CountReducer = () => {
  // 1. useState, useReducer => state management
  // 2. Reduce handlers

  // steps:

  // 1. import useReducer()
  // 2. useReducer(reducer, initialState)
  // 3. return: [count, dispatch]
  // 4. reducer(state, action)

  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <p>Count one is : {count}</p>
        <button style={{ margin: '1rem' }} onClick={() => dispatch({ type: 'add', value: 1 })}>
          add1
        </button>
        <button style={{ margin: '1rem' }} onClick={() => dispatch({ type: 'add', value: 5 })}>
          add5
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>decrement1</button>
        <button style={{ margin: '1rem' }} onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
      <div>
        <p>Count two is : {countTwo}</p>
        <button style={{ margin: '1rem' }} onClick={() => dispatchTwo({ type: 'add', value: 1 })}>
          add2
        </button>
        <button style={{ margin: '1rem' }} onClick={() => dispatchTwo({ type: 'add', value: 5 })}>
          add5
        </button>
        <button
          style={{ margin: '1rem' }}
          onClick={() => dispatchTwo({ type: 'decrement', value: 2 })}
        >
          decrement2
        </button>
        <button style={{ margin: '1rem' }} onClick={() => dispatchTwo({ type: 'reset' })}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default CountReducer
