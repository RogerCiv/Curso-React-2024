import { useState } from "react"

const initialState = {
  name: "",
  email: "",
  password: "",
}

function RegistrarFormulario() {
  // ----- Estados ----- 
  

  const [formData, setFormData] = useState(initialState)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState)
  }

  function handleChange(e){
      e.preventDefault();
      //console.log(e.target.value);
      const { name , value } = e.target;
      //console.log(value);
      setFormData({
        ...formData,
        [name]:value,
      })
  }

  return (
    <>
      <div className="max-w-sm mx-auto bg-slate-500/50 mt-8 p-2 shadow-xl">
        <h1 className="text-balance text-center text-3xl mb-8 font-semibold">Formulario Registro</h1>
        <form onSubmit={handleSubmit} >
          <div className='flex flex-col items-center justify-center gap-2'>
            <label htmlFor="">Nombre:
            </label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} className="rounded-xl p-2" />
            <label htmlFor="">Email:
            </label>
            <input type="email" name='email' value={formData.email} onChange={handleChange}  className="rounded-xl p-2" />
            <label htmlFor="">Password:
            </label>
            <input type="password" name='password' value={formData.password} onChange={handleChange}  className="rounded-xl p-2" />
            <button type="submit" className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Registrar usuario</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default RegistrarFormulario