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

export const getCharacter = async (id: number) => {
  try {
    let apiUrl = ""

    if (id >= 1 && id <= 46) apiUrl = CHARACTERS_URL.single(id)
    else if (id >= 47 && id <= 83) apiUrl = CHARACTERS_URL.singlez(id)
    else if (id >= 84 && id <= 98) apiUrl = CHARACTERS_URL.singledragon(id)
    else if (id >= 99 && id <= 133) apiUrl = CHARACTERS_URL.singlegt(id)
    else if (id >= 134 && id <= 236) apiUrl = CHARACTERS_URL.singlesuper(id)

    const response = await fetch(apiUrl, {
      next: { revalidate: 60 * 60 * 24 }
    })

    const character = await response.json()

    return character
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

export const getDragonBallSuperCharacters = async () => {
  try {
    const apiUrl = CHARACTERS_URL.allDragonBallSuperCharacters

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