

function Ejercicio01() {
    const isLogged = true;
  return (
   <p className="font-semibold text-2xl">
    {isLogged ? "Bienvenido" : "Por favor, Inicia sesión"} 
   </p>
  )
}

export default Ejercicio01