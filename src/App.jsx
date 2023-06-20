import { useState } from 'react'
import Input from './Input'
import Text from './Text'

function App() {
  
  const [count, setCount] = useState(0)

  const changeHandler = (e) => {
    const input = e.target.value;
    setCount(input.length);
  }

  return (
    <div>
      <Input onChange={changeHandler} />
      <Text count={count} />
    </div>
  )
}

export default App
