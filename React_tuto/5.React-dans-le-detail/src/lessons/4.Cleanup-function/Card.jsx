import { useState, useEffect } from 'react'
import './Card.css'
export default function Card(){
    const [state, setState] = useState(0)

    useEffect(()=>{
        console.log("Effet3")
        return () => console.log('fonction de netoyage3')
    })

    return(
        <div className="card">
        <p>Voici les card de mon mise a jour <span>{state}</span></p>
        <button onClick={()=> setState(state + 1)}>Incrementation</button>
        </div>
    )
}