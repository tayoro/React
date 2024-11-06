import { useState } from "react"
import { nanoid } from 'nanoid'
import ListItem from "./components/ListItem"



function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(5), content: "item 1"},
    { id: nanoid(8), content: "item 2"},
    { id: nanoid(8), content: "item 3"}
  ])
  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function todoDelete (id){
    setTodoList(todoList.filter(todo => todo.id != id))
  }

  function handleSubmit (e){
    e.preventDefault()

    if(todo === ''){
      setShowValidation(true);
      return
    }

    setTodoList([...todoList, {id: nanoid(5), content: todo}])
    setTodo('')
    setShowValidation(false)
  }
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do List</h1>
        <form className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">Ajouter une chose a faire</label>
          <input 
          type="text" 
          className="mt-1 block w-full rounded" 
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          />

          {showValidation && ( 
          <p className="text-red-400 ">Ajouter d'abord du contenu à votre tache </p> )}

          <button onClick={handleSubmit} className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>
        <ul>
            {todoList.length === 0 && (
              <li className="text-slate-50 text-md">Pas de todo à afficher...</li>
            )}

            {/* parcourir la list*/}
            {todoList.length > 0 && todoList.map(item => (
              <ListItem key={item.id} itemData={item} todoDelete={todoDelete}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default App
