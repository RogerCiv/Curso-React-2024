import Ejercicio01 from "./components/Ejercicio01"
import Ejercicio02 from "./components/Ejercicio02"
import Ejercicio03 from "./components/Ejercicio03"
import Ejercicio04 from "./components/Ejercicio04"
import Ejercicio05 from "./components/Ejercicio05"
import Ejercicio06 from "./components/Ejercicio06"
import Ejercicio07 from "./components/Ejercicio07"
import Ejercicio08 from "./components/Ejercicio08"
import Ejercicio09 from "./components/Ejercicio09"



function App() {

  function handleClick(){
    alert("Hola");
  }

  return (
    <>
    <main className="flex flex-col justify-center items-center gap-8">

  <Ejercicio01 />
  <Ejercicio02/>
  <Ejercicio03/>
  <Ejercicio04/>
  <Ejercicio05/>
  <Ejercicio06 onClick={handleClick} text={'Ejercicio 06'} className={"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" }/>
  <Ejercicio07 condition={false} />
  <Ejercicio08 title={"Ejercicio 08"} body={"El body del ej 08"} footer={"El footer del ej 08"}/>

  <Ejercicio09 />
    </main>
    </>
  )
}

export default App
