import React from "react"
import CharacterDetail from "@/components/CharacterDetail"
import CoverParticles from "@/components/CoverParticles"
import TransitionPage from "@/components/TransitionPage"
import { getCharacter } from "@/services/characters/character"

interface CharacterDetailPageProps {
  params: {
    characterId: number; 
  };
}

async function CharacterDetailPage({ params }: CharacterDetailPageProps) {

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