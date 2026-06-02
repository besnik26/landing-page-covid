import './App.css'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Prevention from './components/prevention/prevention'
import Stats from './components/stats/Stats'
import Symptoms from './components/symptoms/symptoms'



function App() {

  return (
    <div className="main">
      <img src="/virus-photo.png" alt="virus" className="virus-image" />
      <img src="/virus-right.svg" alt="virus"  className='virus-right-absolute'/>
      <img src="/virus-symptoms-left.png" alt="virus" className='symptoms-left' />
      <img src="/virus-symptoms-right.png" alt="virus" className='symptoms-right' />

      <div className="container">
        <Navbar/>
        <Hero/>
        <Stats/>
        <About/>
        <Prevention/>
        <Symptoms/>
      </div>

    </div>
  )
}

export default App
