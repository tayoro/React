import { useState } from "react"
import "./Container.css"

export default function Container() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ut, corrupti quas labore provident, est neque culpa dolorum
          ab reiciendis qui saepe molestias. Voluptas error provident, 
          molestiae iusto similique tempora pariatur?
      </p>
      <button onClick={() => setDarkMode(!darkMode)}>Activer le {darkMode ? "white mode ":" dark mode"}</button>
    </div>
  
  )
}
