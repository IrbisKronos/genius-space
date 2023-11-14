import { useCallback, useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const handleUseCallbackExample = useCallback(() => {
    setList([...list, 6]);
  }, []);

  useEffect(() => {
    handleUseCallbackExample();
    console.log('render');
  }, [handleUseCallbackExample]);

  const handleClick = () => setList([])

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleClick}>Go</button>
      </header>
    </div>
  )
}
