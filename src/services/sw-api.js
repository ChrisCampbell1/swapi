const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships () {
  let res = await fetch(`${baseUrl}starships`)
  return res.json()
}
