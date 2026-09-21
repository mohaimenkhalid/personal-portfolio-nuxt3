import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import About from '@/components/about'
import DeepDive from '@/components/deep-dive'
import Experience from '@/components/experience'
import BackendCapabilities from '@/components/backend-capabilities'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <DeepDive />
      <Experience />
      <BackendCapabilities />
      <Contact />
    </div>
  )
}
