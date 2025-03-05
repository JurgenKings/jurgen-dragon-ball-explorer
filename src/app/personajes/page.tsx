import React from "react"
import { Metadata } from "next"
import Characters from "@/components/Characters"
import TransitionPage from "@/components/TransitionPage"
import { getDragonBallCharacters } from "@/services/characters/character"
import CoverParticles from "@/components/CoverParticles"

export const metadata: Metadata = {
  title: "Personajes",
  alternates: {
    canonical: `${process.env.BASE_URL}/personajes`,
  }
}

async function CharactersPage() {

  const dragonBallCharacters = await getDragonBallCharacters()

  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <Characters initialCharacters={dragonBallCharacters} />
    </>
  )
}

export default CharactersPage