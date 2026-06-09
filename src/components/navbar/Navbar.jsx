import './Navbar.css'
import { useState } from 'react'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <a 
          href='#hero'
          onClick={() => setIsOpen(false)}>Home</a>
        <a 
          href='#about'
          onClick={() => setIsOpen(false)}>What we do ?</a>
        <a 
          href='#prevention'
          onClick={() => setIsOpen(false)}>Prevention</a>
        <a 
          href='#symptoms'
          onClick={() => setIsOpen(false)}>Symptoms</a>
        <a 
          href='#contact'
          onClick={() => setIsOpen(false)}>Contact us</a>
      </div>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;