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
        <h4 onClick={() => setIsOpen(false)}>Home</h4>
        <h4 onClick={() => setIsOpen(false)}>What we do ?</h4>
        <h4 onClick={() => setIsOpen(false)}>Prevention</h4>
        <h4 onClick={() => setIsOpen(false)}>Symptoms</h4>
        <h4 onClick={() => setIsOpen(false)}>Contact us</h4>
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