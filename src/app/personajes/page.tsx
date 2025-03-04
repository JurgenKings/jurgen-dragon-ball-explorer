import React from "react"
import { Metadata } from "next"
import Characters from "@/components/Characters"
import TransitionPage from "@/components/TransitionPage"
import { getCharacters } from "@/services/characters/character"

export const metadata: Metadata = {
  title: "Personajes",
  alternates: {
    canonical: `${process.env.BASE_URL}/personajes`,
  }
}

async function CharactersPage() {

  const characters = await getCharacters()

  return (
    <>
      <TransitionPage />
      <Characters characters={characters.items} />
    </>
  )
}

export default CharactersPage