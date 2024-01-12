import  { useState } from 'react'

function Buscador( { onSearch }) {

	const [searchInput, setSearchInput] = useState('')

 function handleSearch(){
	onSearch(searchInput)
	setSearchInput('')
 }
	return (
		<div className="max-w-full mx-auto bg-orange-400/50 mt-8 p-2 shadow-xl">
			<h1 className="text-center text-3xl mb-8 font-semibold ">Buscador Películas</h1>
			<div className='flex  items-center justify-center  gap-2'>
				<input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} name='name' className="rounded-xl p-2" placeholder="Star Wars, GodFather..." />
				<button type="submit" onClick={handleSearch} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buscar</button>
			</div>
		</div>
	)
}

export default Buscador