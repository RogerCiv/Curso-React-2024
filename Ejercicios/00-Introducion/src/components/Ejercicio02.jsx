

function Ejercicio02() {
    const nombres = ["Pepe","Pepa","Pepito","Pepita"]
  return (
   <ul className="list-disc text-cyan-500">
    {
        nombres.map((nombre,index) => (
            <li key={index}>{nombre}</li>
        ))
    }
   </ul>
  )
}

export default Ejercicio02