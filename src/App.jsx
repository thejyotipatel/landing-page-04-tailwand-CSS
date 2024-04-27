import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import FAQ from './components/FAQ'

function App() {
  return (
    <>
      <div className='bg-[#F9F9F9]'>
        <div className='max-w-screen-xl md:mx-auto  p-4'>
          <Navbar />
          <HeroComponent />
          <FAQ />
        </div>
      </div>
    </>
  )
}

export default App
