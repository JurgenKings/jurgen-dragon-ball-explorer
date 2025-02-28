import CoverParticles from "@/components/CoverParticles"
import DragonSphere from "@/components/DragonSphere"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import IconicPhrases from "@/components/IconicPhrases"
import TransitionPage from "@/components/TransitionPage"

function Home() {
  return (
    <>
      <TransitionPage />

      <div className="min-h-screen bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Hero />
        <div className="w-full h-10 bg-gradient-to-b from-bg-primary to-blue-500 dark:from-dark-bg-primary dark:to-blue-500"></div>
        {/* <ACACARRUSELDEPERSONAJESDESTACADOS /> */}
        {/* <ACACARRUSELDEPERSONAJESSAIYAN /> */}
        {/* <ACACARRUSELDEPERSONAJESVILLANOS /> */}
        <Gallery />
        <IconicPhrases />
        {/* <ACABANNERQUEMOTIVEAVERPLANETAS /> */}
        <DragonSphere />
      </div>
    </>
  )
}

export default Home