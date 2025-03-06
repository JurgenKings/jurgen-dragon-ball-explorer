import CharacterDetail from "@/components/CharacterDetail"
import CoverParticles from "@/components/CoverParticles"
import TransitionPage from "@/components/TransitionPage"
import { getCharacter } from "@/services/characters/character"
import React from "react"

async function CharacterDetailPage({ params }) {

  const resolvedParams = await params
  const { characterId } = resolvedParams

  const character = await getCharacter(characterId)

  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <CharacterDetail character={character} />
    </>
  )
}

export default CharacterDetailPage