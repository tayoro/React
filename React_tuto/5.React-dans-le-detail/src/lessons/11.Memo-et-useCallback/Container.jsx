import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

export default function Container() {

  const [count, setCount] = useState(0)

  console.log("rendeParent")

  const customLog = useCallback(() =>{
    console.log("bonjour")
  }, [])

  return (
    <div>
      <h1>Memo et useCallback: {count}</h1>

      <Card txt={"txt"} customLog={customLog} /> {/*Enfant */}
      
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}
