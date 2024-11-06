import { useRef, useState } from "react"
import "./Container.css"

export default function Container() {
  const [state, setState]= useState('')

  const handleInput = (e) =>{
    setState(e.target.value)
  }


  const emailRef = useRef()
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(emailRef.current)
    console.log(emailRef.current.value)
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      {/* controlled */}
      <form>
        <input 
        type="text"
        value={state}
        onChange={handleInput}
        />

        {/* uncontrolled */}
        <label htmlFor="email">votre Email</label>
        <input
        ref={emailRef} 
        type="email"
        id="email" 
        />

        <button onClick={handleSubmit}>Envoyer</button> 
      </form>
      <p>votre pseudo :{state} </p>
    </div>
  )
}
