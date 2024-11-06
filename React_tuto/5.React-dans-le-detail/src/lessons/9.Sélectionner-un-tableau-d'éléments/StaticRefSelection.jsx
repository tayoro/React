import { useRef } from "react"

//Selection plusieurs elements 

export default function StaticRefSelection() {
  const inputRef = useRef([])

  function addInputRef(el){
    //Si element existe et qui n'es pas deja present
    if(el && !inputRef.current.includes(el)){
      inputRef.current.push(el);
    }
    console.log(inputRef);
  }

  return (
    <div>
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </div>
  )
}
