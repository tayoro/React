import { useEffect, useState } from "react";
import Card from "./Card";

export default function Container() {
  const [showCard, setShowCard] = useState(true)

  useEffect(()=>{
    console.log("Effet1")
    return () => console.log('fonction de netoyage1')
  })

  useEffect(()=>{
    console.log("Effet2")
    return () => console.log('fonction de netoyage2')
  })

  return (
    <div>
      <h1>Cleanup function</h1>

      <button onClick={() => setShowCard(!showCard)}>Montrer/Cacher la carte</button>

      {showCard && <Card />}
    </div>
  )
}
