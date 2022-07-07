const baseUrl = "https://swapi.dev"

export async function getAllStarShips() {
  const data = await fetch(`${baseUrl}/api/starships`)

  return data.json()
}