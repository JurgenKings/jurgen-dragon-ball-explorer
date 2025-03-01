import { CHARACTERS_URL } from "./urls"

export const getCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.all

    const response = await fetch(apiUrl, {
      next: { revalidate: 60 * 60 * 24 }
    })
  
    const characters = await response.json()
    
    return characters
  } catch (error) {
    if (error) {
      return []
    }
  }
}

export const getSaiyanCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allSaiyan

    console.log("API URL", apiUrl)

    const response = await fetch(apiUrl, {
      next: { revalidate: 60 * 60 * 24 }
    })

    console.log("RESPONSE", response)
  
    const characters = await response.json()

    console.log("CHARACTERS", characters)
    
    return characters
  } catch (error) {
    if (error) {
      // return []
      console.log("ERROR", error)
    }
  }
}