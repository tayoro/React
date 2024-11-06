import { useState } from "react"
import "./Container.css"

export default function Container() {
const [validation, setValidation]=useState(false)

  return (
    <div>
      <h1>Opération ternaire</h1>
      <p>Accepter vous?</p>

      <form>
        {/* <input type="checkbox" checked={validation} onChange={(e) => setValidation(e.target.checked)}/> */}
        <input type="checkbox"  onClick={() => setValidation(!validation)}/>
      <p 
      className={`${validation ? "valid" : "noValid"}`}
      // style={{color: `${validation ? "green":"red"}`}}
      >{validation ? "Bravo, vous pouvez envoyer le formulaire !" : "Cochez la case!"}</p>

      {validation ? <p>vrai</p> : <p>faux</p> }
      </form>
      
    </div>
  )
}
