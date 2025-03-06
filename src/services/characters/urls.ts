const domain = "https://www.dragonballapi.com"

export const CHARACTERS_URL = {
  allDragons: `${domain}/dragons`,
  allDragonBallCharacters: `${domain}/dragonball`,
  allDragonBallZCharacters: `${domain}/dragonballz`,
  allDragonBallGTCharacters: `${domain}/dragonballgt`,
  allDragonBallSuperCharacters: `${domain}/dragonballsuper`,
  single: (id: number) => `${domain}/dragonball/${id}`,
  singlez: (id: number) => `${domain}/dragonballz/${id}`,
  singlegt: (id: number) => `${domain}/dragonballgt/${id}`,
  singlesuper: (id: number) => `${domain}/dragonballsuper/${id}`,
  singledragon: (id: number) => `${domain}/dragons/${id}`,
}