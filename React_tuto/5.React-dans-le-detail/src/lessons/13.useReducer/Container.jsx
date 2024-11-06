import { useReducer } from "react"

export default function Container() {
  const [count, dispatch] = useReducer(reducer, 0)

  function reducer(state, action){
    switch(action.type){
      case "increment":
        console.log(action)
        return state + action.payload
      case "decrement":
        console.log(action)
        return state - 1
      case "multiply":
        console.log(action)
        return state * 2
      case "divide":
        console.log(action)
        return state / 2
    }

  }
  return( 
  <div>
    <h1>Valeur du compteur : {count} </h1>
    <button onClick={() => dispatch({type: "increment", payload: 5})}>Increment </button>
    <button onClick={() => dispatch({type: "decrement", payload: 5})}>Increment </button>
    <button onClick={() => dispatch({type: "multiply", payload: 5})}>Increment </button>
    <button onClick={() => dispatch({type: "divide", payload: 5})}>Increment </button>
  </div>
  )
}
