const pokeApi = { }

pokeApi.convertPokeApiToPokemon = pokeDetail => {
    const pokemon = new Pokemon();
    pokemon.id = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map(slot=>slot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonsDetails = pokemon => 
    fetch(pokemon.url)
    .then(result => result.json())
    .then()

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then(result=>result.json())
    .then(result=>result.results)
    .then(pokemonsList=>pokemonsList.map( pokemon =>  pokeApi.getPokemonsDetails(pokemon)))
    .then(detailRequests => Promise.all(detailRequests))
    .then(pokemonsDetails => pokemonsDetails)
    .catch(erro=>{
        console.error(erro)
    })
    .finally(()=>{
        console.log('Requisição finalizada!')
    })
}