import { useCustomUUID } from "./customHooks/useCustomUUID"
import { useLocalStorage } from "./customHooks/useLocalStorage"
import Counter from "./useCallback/Counter"
import UseMemoProductList from "./useMemo/UseMemoProductList"
import BasicReduce from "./useReducer/BasicReduce"
import FormUseReducer from "./useReducer/FormUseReducer"



function App() {

  const [uuid, setUuid] = useCustomUUID()

  const [storedValue, setStoredValue] = useLocalStorage('keyRGR', 'I Hate SYMFONY')

  return (
    <>
      <h1 className="text-3xl">Hook y useVarios</h1>
      <h2 className="text-2xl">UseMemo</h2>
      <hr />
      <UseMemoProductList />
      <hr />
      <h2 className="text-2xl">UseCallback</h2>
      <Counter />
      <hr />
      <h2 className="text-2xl">UseReduce</h2>
      <BasicReduce />
      <hr />
      <h2 className="text-2xl">UseReduce  FORM</h2>
      <FormUseReducer />
      <hr />
      <h2 className="text-2xl">customHooks</h2>
      <h3>Generar UUID</h3>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4"> UUID Generado: {uuid} </h2>
        <button className="bg-blue-500 text-white p-2 rounded-full" onClick={() => setUuid()}>Generar nuevo UUID</button>
      </div>

      <hr />
      <h2 className="text-2xl">customHooks, useLocalStorage</h2>
      <div className=" container mx-auto p-2">
        <h2>Valor almacenado en localStorage: {storedValue} en la clave keyRGR</h2>
        <input className="w-full px-4 py-2 border border-gray-500 rounded-md"
          type="text"
          value={storedValue}
          onChange={(e) => setStoredValue(e.target.value)} />
      </div>
    </>
  )
}

export default App
