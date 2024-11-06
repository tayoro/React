import { useMemo, useState } from "react";

export default function Calculation(){
    const [temperature, setTemperature] = useState("");

    function celsiusToFarenheit(degree){
        console.log('renduCelsius')
        return degree ? degree * 1.8 + 32 : "Entrer une valeur";
    }

    //const expensiveCalculation = celsiusToFarenheit(temperature)
    const expensiveCalculation = useMemo( () => celsiusToFarenheit(temperature), [temperature])

    console.log('render')


    return(
        <div>
            <input 
            type="number"
            value={temperature}
            onChange={e => setTemperature(e.target.value)} 
            />
            <h1>Valeur de {temperature} degrés en Farenheit: {expensiveCalculation} </h1>
        </div>
    )
}