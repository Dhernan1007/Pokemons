module.exports = (arr) => {
  arr = arr.map(pokemon => {
    return {
      id: pokemon.data.id,
      name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
      height: pokemon.data.height + 'ft',
      weight: pokemon.data.weight + 'lb',
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