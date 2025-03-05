import { Anton } from "next/font/google"
import BannerPlanet from "@/components/BannerPlanet"
import CoverParticles from "@/components/CoverParticles"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import IconicPhrases from "@/components/IconicPhrases"
import TopCharacters from "@/components/TopCharacters"
import TransitionPage from "@/components/TransitionPage"
import Subtitle from "@/components/Subtitle"
import { getDragonBallCharacters, getDragonBallGTCharacters, getDragonBallSuperCharacters, getDragonBallZCharacters, getDragons } from "@/services/characters/character"
import { ICharacter } from "@/interfaces/ICharacter"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
})

const topCharacter = ["Son Goku", "Bulma", "Krilin", "Muten Roshi", "Tenshinhan", "Woolong", "Yajirobei", "Yamcha", "Son Gohan (Abuelo)", "Uranai Baba", "Kami", "Mr. Popo", "Rey Demonio Picolo", "Pilaf", "Androide nº 8", "Tao Pai Pai", "Ermitaño Grulla"]

const topCharacterZ = ["Son Goku", "Bulma", "Krilin", "Piccolo", "Son Gohan", "Mr. Satán", "Videl", "Kaio del Norte", "Ginyu", "Freezer", "Rey Cold", "Androide Número 16", "Cell", "Majin Boo"]

const topCharacterGT = ["Son Goku", "Trunks", "Vegeta", "Pan", "Bulma", "Oob", "Gill", "Goten", "Kibito Kai", "Bón", "General Rildo", "Baby", "Dr. Myuu", "Androide 17", "Super 17"]

const topCharacterSuper = ["Goku", "Vegeta", "Son Gohan", "Androide Número 17", "Freeza", "Krilin", "Piccolo", "Bills", "Whis", "Champa", "Vados", "Hit", "Kafla", "Jiren", "Toppo", "Dyspo", "Agnilasa", "Rey de Todo", "Sumo Sacerdote"]

const topCharacterDragon = ["Shen Long", "Shen Long Definitivo", "Super Shen Long", "Shen Long Oscuro", "Polunga", "Trombo"]

async function Home() {

  const dragons = await getDragons()
  const dragonBallCharacters = await getDragonBallCharacters()
  const dragonBallZCharacters = await getDragonBallZCharacters()
  const dragonBallGTCharacters = await getDragonBallGTCharacters()
  const dragonBallSuperCharacters = await getDragonBallSuperCharacters()

  const topCharactersDB = topCharacter.map((character) => dragonBallCharacters.find((c: ICharacter) => c.name === character))
  const topCharactersDBZ = topCharacterZ.map((character) => dragonBallZCharacters.find((c: ICharacter) => c.name === character))
  const topCharactersDBGT = topCharacterGT.map((character) => dragonBallGTCharacters.find((c: ICharacter) => c.name === character))
  const topCharactersDBSuper = topCharacterSuper.map((character) => dragonBallSuperCharacters.find((c: ICharacter) => c.name === character))
  const topCharactersDragon = topCharacterDragon.map((character) => dragons.find((c: ICharacter) => c.name === character))

  return (
    <>
      <TransitionPage />

      <div className="min-h-screen">
        <CoverParticles />
        <Hero font={anton} />
        <Subtitle className="text-center mb-8">El Inicio de la Aventura</Subtitle>
        <TopCharacters characters={topCharactersDB} />
        <Subtitle className="text-center my-8">¡Explora el Poder de Dragon Ball Z!</Subtitle>
        <TopCharacters characters={topCharactersDBZ} />
        <Subtitle className="text-center my-8">Conoce a los Guerreros de Dragon Ball GT</Subtitle>
        <TopCharacters characters={topCharactersDBGT} />
        <Subtitle className="text-center my-8">¡Explora Dragon Ball Super!</Subtitle>
        <TopCharacters characters={topCharactersDBSuper} />
        <Subtitle className="text-center my-8">¡Los Legendarios Dragones!</Subtitle>
        <TopCharacters characters={topCharactersDragon} />
        <Subtitle className="text-center my-8">¡Revive los Momentos Más Épicos!</Subtitle>
        <Gallery />
        <Subtitle className="text-center mt-16 mb-16">Frases Icónicas que Definieron una Generación</Subtitle>
        <IconicPhrases />
        <BannerPlanet />
      </div>
    </>
  )
}

export default Home