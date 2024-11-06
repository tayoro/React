/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 * @constructor
 */

import { useId } from "react"

export function Input ({placeholder,value,onChange,label}){
    const id = useId();
    const f = function foo(e){
        onChange(e.target.value)   
    }
    return <div>
        <label>{label}</label>
        <input 
            id={id}
            type="text" 
            className="form-control" 
            placeholder={placeholder} 
            value={value} 
            onChange={f}
        />
    </div>
}