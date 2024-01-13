


function Ejercicio06({ className, text, onClick }) {
  
  return (
    <button type="button" className={className} onClick={onClick}>{text || 'texto por defecto'}</button>
  )
}

export default Ejercicio06