import { useEffect, useState } from "react"
import "./Container.css"

export default function Container() {

  const [count, setCount]=useState(0)
  
  useEffect(()=>{
    console.log("Apres la première creation")
  }, [])

  console.log("Mise a jour");

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
