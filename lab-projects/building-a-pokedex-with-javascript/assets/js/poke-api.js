const pokeApi = { }

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then(result=>result.json())
    .then(result=>result.results)
    .catch(erro=>{
        console.error(erro)
    })
    .finally(()=>{
        console.log('Requisição finalizada!')
    })
}