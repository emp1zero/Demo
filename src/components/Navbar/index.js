import React from 'react'
import myImage from '../../images/logo.svg'
import {FaBars} from 'react-icons/fa'
import {Nav,
    NavContainer,
    NavLinkLogo,
    ToggleIcon,
    NavMenu,NavLinks,
    NavItem,
    NavButton,Logo,
    NavButtonLink} from './NavbarStyles'



const Navbar = ({toggle}) => {
    return (
  
      <Nav>
        <NavContainer>
          <NavLinkLogo to='/'><Logo src={myImage}></Logo></NavLinkLogo>
          
          <ToggleIcon onClick={toggle}>
            <FaBars/>
          </ToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to='/signin'>Sign In</NavButtonLink>
            </NavButton>
        </NavContainer>
      </Nav>
      
    )
  }
  
  
  export default Navbar;