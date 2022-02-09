import React, {useState} from 'react';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  const showSidebar = () => setSidebar(!sidebar);
  const testSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    }
  }

  return (
    <div>
      <nav className={navbar ? 'this-container this-actived this-navbar' : 'this-container this-navbar'}>
        <Link  className="this-navLink" to='/' >
          <div className="this-img" onClick={testSidebar}></div>
        </Link>
        <Link to='#' className='this-bars'>
            <FaIcons.FaBars className="this-icon" onClick={showSidebar} />
        </Link>
        <nav className="this-nav-menu">
          <Link className="this-navLink" to='/services' activeStyle>
            Serviços
          </Link>
          <Link className="this-navLink" to='/about' activeStyle>
            Sobre Nós
          </Link>
          <Link className="this-navLink" to='/news' activeStyle>
            Notícias
          </Link>
          <Link className="this-navLink" to='/contact' activeStyle>
            Contato
          </Link>
          <a href='https://onvio.com.br/#/' className="this-navLink-btn"><p>Portal do Cliente</p></a>
          <a href='https://onvio.com.br/#/' className="this-navLink-btn this-navLink-btn-2"><p>Portal do Empregado</p></a>
        </nav>
      </nav>

      <nav className={sidebar ? 'this-nav-menu-mobile  this-active-mobile' : ' this-nav-menu-mobile'}>
          <ul className='this-nav-menu-items' onClick={showSidebar}>
            <li className='this-navbar-toggle'>
              <Link to='#' className='this-menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="this-nav-text">
              <Link className="this-navLink" to='/services' activeStyle>
                Serviços
              </Link>
            </li>
            <li className="this-nav-text" >
              <Link className="this-navLink" to='/about' activeStyle>
                Sobre Nós
              </Link>
            </li>
            <li className="this-nav-text" >
              <Link className="this-navLink" to='/news' activeStyle>
                Notícias
              </Link>
            </li>
            <li className="this-nav-text" >
              <Link className="this-navLink" to='/contact' activeStyle>
                Contato
              </Link>
            </li>
            <li className="this-nav-text">
              <a href='https://onvio.com.br/#/' className="this-navLink-btn"><p>Portal do Cliente</p></a>
            </li>
            <li className="this-nav-text" >
              <a href='https://onvio.com.br/#/' className="this-navLink-btn this-navLink-btn-2"><p>Portal do Empregado</p></a>
            </li>         
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
