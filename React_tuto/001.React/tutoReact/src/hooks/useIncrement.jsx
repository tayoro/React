/**
 * @param {int} initialValue
 */
import { useState } from "react";

export function useIncrement({initialValue=0, max  , min }){
    const [state, setSate] = useState(initialValue) 
    // return [state, //(1)
    //         () => setSate(v => v + 1),
    //         () => setSate(v => v - 1)
    //         ]
    return { //(2)
        count:state,
        increment: () => setSate(v => v + 1 < max ? v + 1 : max),
        decrement: () => setSate(v => v - 1 > min ? v - 1 : min)
    }
}