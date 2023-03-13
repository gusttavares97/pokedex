const fetchPokemon = ()=>{
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const pokemonPromises =[]

for(let i = 1; i <= 151; i++){

    pokemonPromises.push( fetch(getPokemonUrl(i)).then(Response => Response.json()))

}

Promise.all(pokemonPromises)
.then(pokemons =>{
    //console.log(pokemons)

    const listPokemons = pokemons.reduce((accumulator, pokemon) =>{
     const types =  pokemon.types.map(typeInfo => typeInfo.type.name)
     
        accumulator +=`
      <li class="card">
      <img class="card-image ${types[0]}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">${types.join(' | ')}</p>
      <li>
       `
      return accumulator
},  '')
console.log(listPokemons)
})
}

fetchPokemon()
