import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
        <li class="logo"><a  href="#home">FOODYBITE</a></li>
        <li className='rightlink'><a  className='righta' href="#about">SignUp</a></li>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">Service</a></li>
  <li><a href="#contact">Contact</a></li>
  
</ul>
    </div>
  )
}

export default Navbar

