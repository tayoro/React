import { useCallback, useState } from "react";
import Puissance from "./components/Puissance";

export default function UseCallback(){
    const [number, setNumber] = useState(1)
    const [letters, setLetters] = useState(null)

    const increment = () =>{
        console.log('rendu1')
        setNumber(prevNumber => prevNumber + 1)
    }

    const calculPuissance = useCallback(() =>{
        console.log('rendu2')
        setNumber(prevNumber => prevNumber * prevNumber)
    }, [number])
    return (
        <div className="container">
        <br />
        <br />
        <h1>UseCallback</h1>
            <button onClick={() => increment()}>Increment</button> : {number} <br />
            <Puissance calculPuissance={calculPuissance} /> <br />
            <input type="text" onChange={(e) => setLetters(e.target.value)} /> : {letters}
        </div>
    )
}