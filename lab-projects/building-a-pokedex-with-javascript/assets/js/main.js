const pokemonsList = document.getElementById('pokemonsList')
const loadMore = document.getElementById('loadMore')
const limit = 10
let offset = 0
const maxRecords = 151

const convertPokemonToLi = pokemon => {
    return `
        <li id="pokeid-${pokemon.id}" class="pokemon ${pokemon.type}" onClick="window.location.href = '/pokemon.html?id=${pokemon.id}'"> 
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type ${type}"> ${type} </li>`).join(' ')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            
        </li>
    `
}

const loadPokemonsItens = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons=[])=>{
        pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join(' ')
    })
}

loadPokemonsItens(offset, limit)
loadMore.addEventListener('click',()=>{
    offset += limit
    const qntRecord = offset + limit

    if(qntRecord >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonsItens(offset, newLimit)    
        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemonsItens(offset, limit)
    }

    
})