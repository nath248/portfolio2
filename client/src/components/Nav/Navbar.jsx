import './Navbar.css';
import { HashLink as Links } from "react-router-hash-link";

function NavBar() {
  return (
  <div className='navbar'>
    <ul>
      <li><Links to="/">Home</Links></li>
      <li><Links to="/about-me">About Me</Links></li>
      <li><Links to="/projects">Projects</Links></li>
      <li><Links to="/contact-me">Contact Me</Links></li>
    </ul>
  </div>
  );
}

export default NavBar;

