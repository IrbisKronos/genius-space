import { useReducer } from 'react'
import './App.css'
import List from './components/List'

export default function App() {
  const reducer = (state, action) => {
    if (action.type === 'increment') {
      return { count: state.count + 1 }
    }
    if (action.type === 'decrement') {
      return { count: state.count - 1 }
    }
    if (action.type === 'reset') {
      return { count: 0 }
    }
  }
  const [value, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = (type) => {
    dispatch(type);
  }

  return (
    <div className='App'>
      <header>
        <p>{value.count}</p>
        <button onClick={() => handleClick({ type: 'increment' })}>Add</button>
        <button onClick={() => handleClick({ type: 'decrement' })}>Minus</button>
        <button onClick={() => handleClick({ type: 'reset' })}>Reset</button>
      </header>
    </div>
  )
}
