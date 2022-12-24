const convertPokemonToLi = pokemon => {
    
    return `
        <li id="pokeid-${pokemon.id}" class="pokemon ${pokemon.type}"> 
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li> ${type} </li>`).join(' ')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            
        </li>
    `
}

const pokemonsList = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemons=[])=>{
    pokemonsList.innerHTML = pokemons.map(convertPokemonToLi).join(' ')
})