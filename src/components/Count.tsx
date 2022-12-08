import { useState } from "react"

export function Count(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <h2>{count}</h2>
      <div className="buttons">
        <button>Increase</button>
        <button>Decrease</button>
        <button>Set to Zero</button>
      </div>
    </div>
  )
}