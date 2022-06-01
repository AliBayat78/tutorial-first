import React, { Component, useState } from 'react'
import { useContext, useReducer } from 'react/cjs/react.development'

const CounterContext = React.createContext() // state
const CounterContextDispatcher = React.createContext() // setState()
const initialState = 0

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value
    case 'decrement':
      return state - action.value
    case 'reset':
      return initialState
  }
}

const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  )
}

export default CountProvider

export const useCount = () => useContext(CounterContext)
export const useCountAction = () => {
  return useContext(CounterContextDispatcher)

  // const addOne = () => {
  //   setCount((prevState) => prevState + 1)
  // }
  // const addFive = () => {
  //   setCount((prevState) => prevState + 5)
  // }

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1)
  // }
  // return { addOne, addFive, decrement }
}
