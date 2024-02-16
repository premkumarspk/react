import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux';
import { increment } from './Redux/CounterReducer';
function App() {
  const counters = useSelector((state)=>state.counter.counter)
  const dispatch = useDispatch()
  console.log(counters);
  return (
    <div>
        <h2>{counters}</h2>
        <button onClick={()=>dispatch(increment())}>ADD</button>
    </div>
  )
}

export default App