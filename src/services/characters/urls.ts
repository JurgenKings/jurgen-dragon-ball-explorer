const domain = "https://dragonball-api.com/api"
const domain2 = "https://www.dragonballapi.com"

export const CHARACTERS_URL = {
  all: `${domain}/characters`,
  allSaiyan: `${domain}/characters?race=Saiyan`,
  allDragons: `${domain2}/dragons`,
  allDragonBallCharacters: `${domain2}/dragonball`,
  allDragonBallZCharacters: `${domain2}/dragonballz`,
  allDragonBallGTCharacters: `${domain2}/dragonballgt`,
  allDragonBallSuperCharacters: `${domain2}/dragonballsuper`,
  single: (id: number) => `${domain2}/dragonball/${id}`,
  singlez: (id: number) => `${domain2}/dragonballz/${id}`,
  singlegt: (id: number) => `${domain2}/dragonballgt/${id}`,
  singlesuper: (id: number) => `${domain2}/dragonballsuper/${id}`,
  singledragon: (id: number) => `${domain2}/dragons/${id}`,
}