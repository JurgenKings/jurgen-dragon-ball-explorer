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

export const getDragons = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allDragons

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

export const getDragonBallCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allDragonBallCharacters

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

export const getDragonBallZCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allDragonBallZCharacters

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

export const getDragonBallGTCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allDragonBallGTCharacters

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