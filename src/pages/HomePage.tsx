import { Hero } from '../components/Hero'
import { ProofMetrics } from '../components/ProofMetrics'
import { SelectedWork } from '../components/SelectedWork'
import {
  EvalsFeature,
  Capabilities,
  MoreWork,
  LatestLearning,
  About,
  Contact,
} from '../components/HomeSections'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProofMetrics />
      <SelectedWork />
      <EvalsFeature />
      <Capabilities />
      <MoreWork />
      <LatestLearning />
      <About />
      <Contact />
    </>
  )
}
