import { useState } from "react";
import './DarkLightMode.css';

function DarkLightMode() {
    
    const [darkMode, setDarkMode] = useState(false);

   function toggleTheme () {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div className={`default ${darkMode ? "dark" : "light"}`}>
                <h1>Cambio de color Tema</h1>
                <button onClick={toggleTheme}> {darkMode ? "Modo Oscuro" : "Modo Claro"}</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolores assumenda molestiae tenetur ullam nam quia iure molestias nulla voluptate?</p>
            </div>
        </>
    );
}

export default DarkLightMode;
