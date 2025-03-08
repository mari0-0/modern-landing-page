
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <div className='w-full h-full dark:bg-neutral-900'>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
