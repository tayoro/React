/**
 * @param {boolean} initial
 */
import { useState } from "react";

export function useToggle(initial = false){
    const [state, setSate] = useState(initial)
    const Toggle = () => setSate(v => !v)
    return [state, Toggle] 
}