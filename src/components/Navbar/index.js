import React,{useState,useEffect} from 'react';
import myImage from '../../images/logo.svg';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,
    NavContainer,
    NavLinkLogo,
    ToggleIcon,
    NavMenu,NavLinks,
    NavItem,
    NavButton,Logo,
    NavButtonLink} from './NavbarStyles';




const Navbar = ({toggle}) => {
  const [scrollNav,setscrollNav]=useState(false)
  const changeNav = () =>{
    window.scrollY >= 80 ? setscrollNav(true):setscrollNav(false)
  }
  useEffect(()=> {
    window.addEventListener('scroll',changeNav)
  },[])

  const toggleHome=()=>{
    scroll.scrollToTop();
  }
    return (
  <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLinkLogo to='/' onClick={toggleHome}><Logo src={myImage}/></NavLinkLogo>
          <ToggleIcon onClick={toggle}>
            <FaBars/>
          </ToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} 
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
                smooth={true} 
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
                smooth={true} 
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
                smooth={true} 
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to='/signin'>Sign In</NavButtonLink>
            </NavButton>
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    )
  }
  
  
  export default Navbar;