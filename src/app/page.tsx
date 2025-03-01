import BannerPlanet from "@/components/BannerPlanet"
import CoverParticles from "@/components/CoverParticles"
import DragonSphere from "@/components/DragonSphere"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import IconicPhrases from "@/components/IconicPhrases"
import TopCharacters from "@/components/TopCharacters"
import TransitionPage from "@/components/TransitionPage"
import { getSaiyanCharacters } from "@/services/characters/character"

const saiyanCharacters = [
  {
    "id": 1,
    "name": "Goku",
    "ki": "60.000.000",
    "maxKi": "90 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
    "image": "https://dragonball-api.com/characters/goku_normal.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 2,
    "name": "Vegeta",
    "ki": "54.000.000",
    "maxKi": "19.84 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
    "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 10,
    "name": "Gohan",
    "ki": "45.000.000",
    "maxKi": "40 septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan.",
    "image": "https://dragonball-api.com/characters/gohan.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 15,
    "name": "Gotenks",
    "ki": "65.600.000",
    "maxKi": "34.8 Billion",
    "race": "Saiyan",
    "gender": "Male",
    "description": " Gotenks también conocido inicialmente como Gotrunk en el doblaje al español de España, es el resultado de la Danza de la Fusión llevada a cabo correctamente por Goten y Trunks.",
    "image": "https://dragonball-api.com/characters/Gotenks_Artwork.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 16,
    "name": "Trunks",
    "ki": "50.000.000",
    "maxKi": "37.4 septllion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Hijo de Vegeta y Bulma. Es un mestizo entre humano terrícola y Saiyano nacido en la Tierra, e hijo de Bulma y Vegeta, el cual es introducido en el Arco de los Androides y Cell. Más tarde en su vida como joven, se termina convirtiendo en un luchador de artes marciales, el mejor amigo de Son Goten y en el hermano mayor de su hermana Bra.",
    "image": "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 18,
    "name": "Bardock",
    "ki": "450.000",
    "maxKi": "180.000.000",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Es un saiyano de clase baja proveniente del Planeta Vegeta del Universo 7. Pertenece al Ejército Saiyano, que está bajo el liderazgo del Rey Vegeta, y es jefe de su escuadrón durante la anexión del planeta por parte de las fuerzas coloniales del Imperio de Freeza. Él es el esposo de Gine y padre biológico de Kakarotto y Raditz.",
    "image": "https://dragonball-api.com/characters/Bardock_Artwork.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 30,
    "name": "Raditz",
    "ki": "1.500 ",
    "maxKi": "1.500 ",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Es el hijo de Bardock y Gine, y hermano mayor de Son Goku. Él es uno de los pocos saiyanos que sobrevivieron a la destrucción del Planeta Vegeta, y formaba parte del equipo de Vegeta. Es el primer antagonista de Dragon Ball Z.",
    "image": "https://dragonball-api.com/characters/Raditz_artwork_Dokkan.webp",
    "affiliation": "Army of Frieza",
    "deletedAt": null
  },
  {
    "id": 65,
    "name": "Gogeta",
    "ki": "250 Billion",
    "maxKi": "15 septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Gogeta es la fusión resultante de Son Goku y Vegeta, cuando realizan la Danza de la Fusión correctamente para enfrentarse a Broly. Su voz es una voz dual que contiene las voces de Goku y Vegeta. Junto con el poder todopoderoso de los dos, con la astucia y perspicacia de Vegeta, y la habilidad pródiga de las artes marciales de Goku, es uno de los guerreros más temibles para desafiar a una pelea.",
    "image": "https://dragonball-api.com/transformaciones/gogeta.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 66,
    "name": "Vegetto",
    "ki": "180 Billion",
    "maxKi": "10.8 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Vegetto es el personaje más fuerte dentro del manga original y uno de los personajes más poderosos de toda la serie en general. Su poder es el resultado del máximo poder combinado de Goku y Vegeta, multiplicado varias veces su fuerza, siendo una de las fusiones más poderosas dentro de la franquicia.",
    "image": "https://dragonball-api.com/transformaciones/Vegetto.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 68,
    "name": "Broly",
    "ki": "7 quadrillion",
    "maxKi": "11.2 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Broly es un Saiyajin que posee un poder gigantesco e incontrolable, el cual se manifiesta en toda su magnitud cuando se convierte en el Super Saiyajin Legendario. Incluso cuando apenas era un bebé su nivel de poder alcanzaba cifras inmensas que provocaban asombro y preocupación entre los de su raza",
    "image": "https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
    "affiliation": "Other",
    "deletedAt": null
  }
]

async function Home() {

  // const saiyanCharacters = await getSaiyanCharacters()

  // console.log("ACA", saiyanCharacters)

  return (
    <>
      <TransitionPage />

      <div className="min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Hero />
        <TopCharacters characters={saiyanCharacters} />
        <Gallery />
        <IconicPhrases />
        {/* <BannerPlanet /> */}
        {/* <DragonSphere /> */}
      </div>
    </>
  )
}

export default Home