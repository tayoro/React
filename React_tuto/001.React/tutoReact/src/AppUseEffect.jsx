import { useEffect, useState } from "react";
import { Checkbox } from "./components/forms/CheckBox";
import { Input } from "./components/forms/Input";

function AppUseEffect() {
    //vrai ou faux
    const [show, SetShow] = useState(false)
    const [etatCompter, SetEtatCompter] = useState(show)
    const [duration, SetDuration] = useState(10)
    const [secondsLeft, setSecondsLeft] = useState(duration)
    const label = show ? "Ok" :"No";

    

    const handleChange = (v) =>{
        SetDuration(v)
        setSecondsLeft(v)
    }
    useEffect(()=>{
        var timer = setInterval(()=>{
            setSecondsLeft((v)=>v-1 > 0 ? v-1 : 0)
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    }, [duration])

    const modifEtat = (v) =>{
        SetShow(v)
        if(!show){
            console.log("arret de compteur")
            clearInterval()
        }
    }
    useEffect(()=>{
        
    }) 

    
    return <div className="container my-3">
        <br />
        <h1>useEffect</h1>
        
        <Checkbox  
            id="check" 
            checked={show} 
            onChange={modifEtat} 
            label={label}
        />
        
        <div> 
            <Input 
             placeholder="Entrer le nombre de temps " 
             value={duration}
             onChange={handleChange}
            />
            <br />
            <div>
                Decompte:{secondsLeft}
            </div>
        </div>
        
        
    </div>
}

export default AppUseEffect;