import './navbar.css'
import logo from '../../assets/star.svg'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link, Element } from 'react-scroll';
const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  }, [])
  return (
   <nav className={`container ${sticky? ' dark-nav' : ''}`}>
     <div className="logo-container">
      <img src={logo} alt="Logo" />
      <h3>Dream Dolls</h3>
    </div>
    <ul>
        
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Dolls' smooth={true} offset={-260} duration={500}>Dolls </Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
    </ul>
   </nav>
  )
}

export default NavBar 