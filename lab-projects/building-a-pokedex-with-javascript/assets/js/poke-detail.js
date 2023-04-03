function getIdRequest(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
 }

const url = `https://pokeapi.co/api/v2/pokemon/${getIdRequest('id')}/`;
let pokemonDetail = {}

pokeApi.getPokemonDetails(url).then(result => {
    pokemonDetail.name = result.name
    console.log(result)

    loadDetails();
})
.catch(erro=>{
    console.error(erro)
})
.finally(()=>{
    console.log('Requisição finalizada!')
})


loadDetails = () => {
    const name = document.getElementById("name");
    name.innerHTML = pokemonDetail.name
}