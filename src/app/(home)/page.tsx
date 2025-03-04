import { Anton } from "next/font/google"
import BannerPlanet from "@/components/BannerPlanet"
import CoverParticles from "@/components/CoverParticles"
import DragonSphere from "@/components/DragonSphere"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import IconicPhrases from "@/components/IconicPhrases"
import TopCharacters from "@/components/TopCharacters"
import TransitionPage from "@/components/TransitionPage"
import { getDragonBallCharacters, getDragonBallGTCharacters, getDragonBallZCharacters, getDragons, getSaiyanCharacters } from "@/services/characters/character"
import Subtitle from "@/components/Subtitle"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
})

async function Home() {

  const saiyanCharacters = await getSaiyanCharacters()
  const dragons = await getDragons()
  const dragonBallCharacters = await getDragonBallCharacters()
  const dragonBallZCharacters = await getDragonBallZCharacters()
  const dragonBallGTCharacters = await getDragonBallGTCharacters()

  return (
    <>
      <TransitionPage />

      <div className="min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Hero font={anton} />
        <Subtitle className="text-center mb-8">El Inicio de la Aventura</Subtitle>
        <TopCharacters characters={dragonBallCharacters} />
        <Subtitle className="text-center my-8">¡Explora el Poder de Dragon Ball Z!</Subtitle>
        <TopCharacters characters={dragonBallZCharacters} />
        <Subtitle className="text-center my-8">Conoce a los Guerreros de Dragon Ball GT</Subtitle>
        <TopCharacters characters={dragonBallGTCharacters} />
        <Subtitle className="text-center my-8">¡Los Legendarios Dragones!</Subtitle>
        <TopCharacters characters={dragons} />
        <Subtitle className="text-center my-8">¡Revive los Momentos Más Épicos!</Subtitle>
        <Gallery />
        <Subtitle className="text-center mt-16 mb-16">Frases Icónicas que Definieron una Generación</Subtitle>
        <IconicPhrases />
        <BannerPlanet />
        {/* <DragonSphere /> */}
      </div>
    </>
  )
}

export default Home