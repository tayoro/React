import { useReducer } from "react";
import { useTodos } from "./hooks/useTodos";

//Composante principale
function UseReducer(){
    
    /* (1) voir hook personnaliser /Hook/useTodos.jsx
    //Importer depuis le hook 
    const usetodos = useTodos() 
    console.log(usetodos.dispatch)
    const visibleTodos = usetodos.state.showCompleted ? usetodos.state.todos : usetodos.state.todos.filter(t => !t.checked)

    return <div className="container">
        <p>
            <input type="checkbox" checked={usetodos.state.showCompleted} onChange={()=> usetodos.dispatch({type: 'TOGLE_FILTER'})} />
            Afficher les taches accomplies
        </p>

        <ul>
        {visibleTodos.map(todo => <li
                key={todo.name}
            >   
                <input type="checkbox" checked={todo.checked} onChange={()=> usetodos.dispatch({type: 'TOGLE_TODO', payload: todo})} />
                {todo.name}
                <button onClick={()=>usetodos.dispatch({type: 'REMOVE_TODO', payload: todo})}>
                    Suprimer
                </button>
            </li>)}
        </ul>
        <button onClick={()=> usetodos.dispatch({type: 'CLEAR_COMPLETED'})}>suprimer les taches accomplies</button>
    </div>
    */
    
    // (2) voir hook personnaliser /Hook/useTodos.jsx
    const {visibleTodos, toggleTodo, removeTodo, clearCompleted, toggleFilter, showCompleted} = useTodos()

    
    return <div className="container">
        <p>
            <input type="checkbox" checked={showCompleted} onChange={toggleFilter} />
            Afficher les taches accomplies
        </p>

        <ul>
        {visibleTodos.map(todo => <li
                key={todo.name}
            >   
                <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo)} />
                {todo.name}
                <button onClick={() => removeTodo(todo)}>
                    Suprimer
                </button>
            </li>)}
        </ul>
        <button onClick={clearCompleted}>suprimer les taches accomplies</button>
    </div>
}

export default UseReducer;