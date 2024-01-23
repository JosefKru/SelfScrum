import { useState } from "react";
import { render } from "react-dom";
import  './Test.scss'

const Counter = () => {
     const [count, setCount] = useState<number>(0)

     return (
          <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>PLUS</button>
          </>
     )
}

render(
     <Counter />,
     document.getElementById('root')
)