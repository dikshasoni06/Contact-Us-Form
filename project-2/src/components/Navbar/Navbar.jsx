import React from 'react'
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div>
      <nav className= {`${styles.Navbar} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="do some coding logo" />
        </div>

        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar;
