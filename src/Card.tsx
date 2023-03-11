import { useState } from 'react'
import Button from './Button'

function Card() {
  const [count, setCount] = useState(0)
  const is_multiple_3 = (n: number) => {
    if (n == 0){
      return false
    }
    return (n % 3 == 0 || n.toString().includes("3"))
  }

  return (
    <div className="card">
      {is_multiple_3(count) ? <p>\('Д')/{count}!!</p> : <p>{count}</p>}
      <Button onClick={() => setCount((count) => count + 1)} color="red">
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Card
