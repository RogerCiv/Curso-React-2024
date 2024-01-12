import Ejercicio01 from "./components/Ejercicio01"
import Ejercicio02 from "./components/Ejercicio02"
import Ejercicio03 from "./components/Ejercicio03"
import Ejercicio04 from "./components/Ejercicio04"
import Ejercicio05 from "./components/Ejercicio05"
import Ejercicio06 from "./components/Ejercicio06"
import Ejercicio07 from "./components/Ejercicio07"
import Ejercicio08 from "./components/Ejercicio08"
import { person } from './helpers/person'


function App() {


  return (
    <>
  <Ejercicio01 />
  <Ejercicio02/>
  <Ejercicio03/>
  <Ejercicio04/>
  <Ejercicio05/>
  <Ejercicio06 person={person}/>
  <Ejercicio07 condition={false} />
  <Ejercicio08 title={"Ejercicio 08"} body={"El body del ej 08"} footer={"El footer del ej 08"}/>
    </>
  )
}

export default App
