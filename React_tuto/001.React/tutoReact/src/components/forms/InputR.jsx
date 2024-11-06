/**
 * 
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @param {string} <label htmlFor=""></label>
 * @returns 
 */

export function InputR({value,onChange,label}){
    return <div>
        <input 
            type="range" 
            className="form-range" 
            min={0} max={10} 
            value={value} 
            onChange={(e)=> onChange(e.target.value)}
        />
        <label>{label}</label>
    </div>
}