import { Hero } from '../components/Hero'
import { SelectedWork } from '../components/SelectedWork'
import { Contact } from '../components/HomeSections'
import { FeaturedExperiment } from '../components/FeaturedExperiment'
import { ExperimentLab } from '../components/ExperimentLab'
import { BuilderAbout } from '../components/BuilderAbout'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiment />
      <SelectedWork />
      <ExperimentLab />
      <BuilderAbout />
      <Contact />
    </>
  )
}
