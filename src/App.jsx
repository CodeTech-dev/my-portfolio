import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import FeaturedProjects from './components/FeaturedProjects'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <Statistics />
      </main>
      <Footer />
    </div>
  )
}

export default App
