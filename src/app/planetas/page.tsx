import React from "react"
import { Metadata } from "next"
import TransitionPage from "@/components/TransitionPage"
import CoverParticles from "@/components/CoverParticles"
import { getAllPlanets } from "@/services/planets/planet"
import Planets from "@/components/Planets"

export const metadata: Metadata = {
  title: "Planetas",
  alternates: {
    canonical: `${process.env.BASE_URL}/planetas`,
  }
}

async function PlanetsPage() {

  const planets = await getAllPlanets()

  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <Planets initialPlanets={planets.items} />
    </>
  )
}

export default PlanetsPage