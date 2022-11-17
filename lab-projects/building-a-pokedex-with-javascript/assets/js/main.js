pokeApi.getPokemons().then(pokemons=>{
    let ol = document.getElementById("pokemonsList")
    ol.innerHTML += pokemons.map(convertPokemonToLi).join('')
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