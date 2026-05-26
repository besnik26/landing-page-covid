import './App.css'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'



function App() {

  return (
    <div className="main">
      <img src="/virus-photo.png" alt="virus" className="virus-image" />
      <img src="/virus-right.svg" alt="virus"  className='virus-right-absolute'/>
      <div className="container">
        <Navbar/>
        <Hero/>
        <Stats/>
        <About/>
      </div>

    </div>
  )
}

export default App
