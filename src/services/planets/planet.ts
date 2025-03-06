import { PLANETS_URL } from "./urls"

export const getAllPlanets = async () => {
  try {
    const apiUrl = PLANETS_URL.all

    const response = await fetch(apiUrl, {
      next: { revalidate: 60 * 60 * 24 * 7 }
    })
  
    const planets = await response.json()
    
    return planets
  } catch (error) {
    if (error) {
      return []
    }
  }
}