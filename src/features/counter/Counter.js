import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, fetchUserById } from './counterSlice'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const en = useSelector((state) => state.counter.entities)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            console.log(en)  
            dispatch(fetchUserById(1))
            dispatch(increment())
        }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}