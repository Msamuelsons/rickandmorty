const { main } = require('./service')

async function characters() {
  try {
    const { results } = await main('2')

    const character = results.map((items) => [
      items.name,
      items.species,
      items.image,
    ])

    character.forEach((element) => console.log(element))
    
  } catch (err) {
    console.error('Error: ', err)
  }
}
characters()
