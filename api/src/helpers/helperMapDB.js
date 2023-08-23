module.exports = (pokemonDB) => {
    return {
      id: pokemonDB.id,
      name: pokemonDB.name,
      image: pokemonDB.image,
      hp: pokemonDB.hp,
      attack: pokemonDB.attack,
      defense: pokemonDB.defense,
      speed: pokemonDB.speed,
      height: pokemonDB.height,
      weight: pokemonDB.weight,
      type: pokemonDB.types,
      createdInDb: true
  }
}