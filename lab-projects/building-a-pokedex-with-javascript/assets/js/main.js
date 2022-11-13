const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then(result=>result.json())
    .then(result=>result.results)
    .then(pokemons=>{
        let ol = document.getElementById("pokemonsList")
        pokemons.forEach(pokemon => {
            ol.innerHTML += convertPokemonToLi(pokemon)
        });
    })
    .catch(erro=>{
        console.error(erro)
    })
    .finally(()=>{
        console.log('Requisição finalizada!')
    })

const convertPokemonToLi = pokemon => {
    return `
        <li class="pokemon"> 
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li> tipo 1 </li>
                    <li> tipo 2 </li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg" alt="${pokemon.name}">
            </div>
            
        </li>
    `
}