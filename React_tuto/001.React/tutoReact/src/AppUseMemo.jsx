import { useMemo, useState } from "react";
import { Input } from "./components/forms/Input";

function AppUseMomo(){
    const [firstname, setFirstname] = useState('john')
    const [password, setPassword] = useState('MotDePass')
    //const security = passwordSecurity(password)
    
    const security = useMemo(()=>{
        return passwordSecurity(password)

    }, [password])


    return <div className="container my-3 vstack gap-2">
        <br />
        <h1>useMemo</h1>
        <Input 
            label="Nom d'utilisateur"
            value={firstname}
            onChange={setFirstname} 
        />
        <div>
            <Input 
                label="Mot de passe"
                type= "password"
                value={password}
                onChange={setPassword} 
            />
            <div>Securité: {security}</div>
        </div>

    </div>
}

function passwordSecurity(password){
    //fausse lenteur
    let startTime = performance.now();
    while(performance.now() - startTime <200){
    }

    if(password.length < 3){
        return 'Faible'
    }else if(password.length < 6){
        return 'Moyen'
    }
    return 'Fort'
}

export default AppUseMomo;