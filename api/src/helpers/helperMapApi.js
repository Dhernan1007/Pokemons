module.exports = (arr) => {
   arr = arr.map(pokemon =>{
      return{
        id: pokemon.data.id,
      name: pokemon.data.name,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      image: pokemon.data.sprites.other['official-artwork'].front_default,
      hp: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      speed: pokemon.data.stats[5].base_stat,
      // type: pokemon.types.type.name, 
      type: pokemon.data.types.map(elements => elements.type.name),
      // type: pokemon.types.map(elements => elements = { type: elements.type.name }),
    }
})
return arr;
}