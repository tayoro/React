import { useState } from "react";
import { useIncrement } from "./hooks/useIncrement";
import { useToggle } from "./hooks/useToggle";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { Input } from "./components/forms/Input";

function AppHookPerso(){
    //Voir hook useToogle.jsx
    const [check, setCheck]= useToggle()

    //Par destructuration on recupere ses trois variable
    //const [count, increment, decrement] = useIncrement() //(1) voir le Hook useIncrement.jsx
    const {count, increment, decrement} = useIncrement({initialValue:0, max: 10 , min: -10}) //(2) voir le useIncrement.jsx

    const [name, setName] = useState('')
    useDocumentTitle(name ? `Editer ${name}`: null)

    return <div className="container mb-3 my-1000">
        <div>
            <br />
            <h1>Hook personnalisé</h1>
            <input type="checkbox" checked={check} onChange={setCheck}  />
            {check && 'je suis coché'}
        </div>
        <br />
        <div>
            <input type="button" value="in---crement" onClick={increment} />
            <input type="button" value="De***crement" onClick={decrement} />
        </div>
        <div>{count}</div>
        <br />
        <h2>useDocumentTitle</h2>
        <div>
            <Input value={name} onChange={setName} label="name"/>
        </div>
    </div>
}

export default AppHookPerso;