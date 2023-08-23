module.exports  = pokemon => {
    return {
      id: pokemon.data.id,
      name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      image: pokemon.data.sprites.other['official-artwork'].front_default,
      imageNew: pokemon.data.sprites.other['dream_world'].front_default,
      hp: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      speed: pokemon.data.stats[5].base_stat,
      type: pokemon.data.types.map(elements => elements.type.name).join(' / '),
    }
  }
 
