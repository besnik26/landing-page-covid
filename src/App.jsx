import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Prevention from './components/prevention/prevention'
import Stats from './components/stats/Stats'
import Symptoms from './components/symptoms/symptoms'



function App() {

  return (
    <div className="main">
      <img src="/virus-photo.png" alt="virus" className="virus-image abs-off" />
      <img src="/virus-right.svg" alt="virus"  className='virus-right-absolute abs-off'/>
      <img src="/virus-symptoms-left.png" alt="virus" className='symptoms-left abs-off' />
      <img src="/virus-symptoms-right.png" alt="virus" className='symptoms-right abs-off' />
      <img src="/footer-background.png" alt="footer"  className='footer-img'/>

      <div className="container">
        <Navbar/>
        <div id='hero'>
          <Hero/>
        </div>
        
        <Stats/>
        
        <div id='about'>
          <About/>
        </div>
        <div id='prevention'>
          <Prevention/>
        </div>
        <div id='symptoms'>
          <Symptoms/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </div>

    </div>
  )
}

export default App
