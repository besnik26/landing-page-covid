import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'



function App() {

  return (
    <div className="main">
      <img src="/virus-photo.png" alt="virus" className="virus-image" />
      <div className="container">
        <Navbar/>
        <Hero/>
        <Stats/>
      </div>

    </div>
  )
}

export default App
