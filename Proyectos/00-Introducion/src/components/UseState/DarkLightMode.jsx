import { useState } from "react"
import './DarkLightMode.css';

function DarkLightMode() {
    
const [darkMode, setdarkMode] = useState(false)

  return (
    <>
    <div className={`default ${darkMode ? "dark" : "ligth"}`}>
        <h1>Cambio de color Tema</h1>
        <button onClick={toggleTheme}>Modo Claro {darkMode && "Modo Oscuro"}</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolores assumenda molestiae tenetur ullam nam quia iure molestias nulla voluptate?</p>
    </div>
    </>
  )
}

export default DarkLightMode