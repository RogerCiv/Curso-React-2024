export const pokeApi = async ( page = 1) => {
    try{
        // const url = `https://pokeapi.co/api/v2/pokemon/`;
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 20}&limit=20`;
        const response = await fetch(url);
        const data = await response.json();

        return data
        
    }catch(error){
        console.log(error)
    }
}