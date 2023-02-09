import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({onMouse, offMouse}) => {
   // console.log('try1',onMouse);
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
   setOpen(prev=>!prev);
   }
   const openStatus = open ? 'open' : 'close';
   const menuStatus = open ? 'mobile' : 'desktop';
    return (
      <header className="header container">

        <nav >
        <ul className={`nav-menu ${menuStatus} ${openStatus}`}  >
    
    <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
      <NavLink   
        to="/"
        className={({ isActive }) =>
        isActive ? "active" : "inactive"
      }
       
      >
        Home
      </NavLink>
    </li>
    <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
      <NavLink
        to="projects"
       className={({ isActive }) =>
          isActive ? "active" : "inactive"
        }
      >
        Projects
      </NavLink>
    </li>
    <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
      <NavLink to="cv"
      className={({ isActive }) =>
      isActive ? "active" : "inactive"
    }>
        Resume
      </NavLink>
    </li>
    <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
      <NavLink to="contact"
      className={({ isActive }) =>
      isActive ? "active" : "inactive"
    }>
        Contact
      </NavLink>
    </li>
  </ul>
          {
            window.innerWidth < 768 &&
            <ul className={`nav-menu ${menuStatus} ${openStatus}`} onClick={handleOpen} >
    
            <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
              <NavLink   
                to="/"
                className={({ isActive }) =>
                isActive ? "active" : "inactive"
              }
               
              >
                Home
              </NavLink>
            </li>
            <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
              <NavLink
                to="projects"
               className={({ isActive }) =>
                  isActive ? "active" : "inactive"
                }
              >
                Projects
              </NavLink>
            </li>
            <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
              <NavLink to="cv"
              className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }>
                Resume
              </NavLink>
            </li>
            <li onMouseEnter={onMouse} onMouseLeave={offMouse}>
              <NavLink to="contact"
              className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }>
                Contact
              </NavLink>
            </li>
          </ul>
          }
       
      
         <div   className={`hamburger-menu ${openStatus}`} onClick={handleOpen}>
        <div class="hamburger-menu__line"/>
        <div class="hamburger-menu__line"/>
        </div> 
      </nav>
                </header>
    );
    
};

export default Header;

 /*onMouseEnter={onMouse} onMouseLeave={offMouse}*/