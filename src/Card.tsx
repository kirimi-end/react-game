import { useState } from 'react'
import Button from './Button'

function Card() {
  const [blueCount, setBlueCount] = useState(0)
  const [redCount, setRedCount] = useState(0)

  return (
    <div className="card">
      <Button onClick={() => setBlueCount((count) => count + 1)} color="blue">
        count is {blueCount}
      </Button>

      <Button onClick={() => setRedCount((count) => count + 1)} color="red">
        count is {redCount}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Card
