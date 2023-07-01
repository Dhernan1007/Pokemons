module.exports = (pokemon) => {
  return {
    id: pokemon.data.id,
    name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
    height: pokemon.data.height + ' ' + 'ft',
    weight: pokemon.data.weight + ' ' + 'lb',
    image: pokemon.data.sprites.other['official-artwork'].front_default,
    hp: pokemon.data.stats[0].base_stat,
    attack: pokemon.data.stats[1].base_stat,
    defense: pokemon.data.stats[2].base_stat,
    speed: pokemon.data.stats[5].base_stat,
    // type: pokemon.types.type.name, 
    type: (pokemon.data.types.map(elements =>elements.type.name.charAt(0).toUpperCase() + elements.type.name.slice(1))).join(' / '),
    // type: pokemon.types.map(elements => elements = { type: elements.type.name }),
  }

  // OTRA MANERA
  
    // return {
    //   id: pokemon.data.id,
    //   name: pokemon.data.name,
    //   height: pokemon.data.height,
    //   weight: pokemon.data.weight,
    //   image: pokemon.data.sprites.other['official-artwork'].front_default,
    //   hp: pokemon.data.stats.find(elements => elements.stat.name === 'hp').base_stat,
    //   attack: pokemon.data.stats.find(elements => elements.stat.name === 'attack').base_stat,
    //   defense: pokemon.data.stats.find(elements => elements.stat.name === 'defense').base_stat,
    //   speed: pokemon.data.stats.find(elements => elements.stat.name === 'speed').base_stat,
    //   // type: pokemon.types.type.name, 
    //   type: pokemon.data.types.map(elements => elements.type.name),
    //   // type: pokemon.types.map(elements => elements = { type: elements.type.name }),
    // }

}
