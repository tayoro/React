import { useEffect, useRef, useState } from "react";
import { Input } from "./components/forms/Input";

function AppUseRef (){
    const prefixRef = useRef(null)
    const [prefix, setPrefix] = useState('')

    prefixRef.current = prefix

    // useEffect(()=>{
    //     const timer = setInterval(() => {
    //         console.log(prefixRef.current)
    //     }, 1000);
    //     return ()=>{
    //         clearInterval(timer);
    //     }
    // }, []);
   
    
    useEffect(()=>{
        
        prefixRef.current.setAttribute("style", "background : blue; border : red 2px solid") // ajouter des attribut
        prefixRef.current.classList.add('error') // ajouter a la lise de class
        console.log(prefixRef.current)
    }, [])
    

    return <div ref={prefixRef} className="container my-3">
        <br />
        <h1>useRef</h1>
        <Input label="prefix" value={prefix} onChange={setPrefix} />
    </div>
}

export default AppUseRef;