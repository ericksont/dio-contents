pokeApi.getPokemons().then(pokemons=>{
    let ol = document.getElementById("pokemonsList")
    ol.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

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