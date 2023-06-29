import React from 'react'
import { useState } from 'react'
import './nav.css'
import styled from 'styled-components'
import myImage from '../images/logo.svg'
import {Link,} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const NavContainer=styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width:600px ){
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  };
  
`;
const LogoContainer=styled.div`
  display: flex;
  justify-content: space-between;

@media only screen and (max-width:600px){
display: flex;
width: 100%;
}

`
const Logo=styled.img`
width: 100px;
height: 100px;
  
`;
const NavLink=styled(Link)`
`;

const NavMenu=styled.ul`
display: flex;
gap: 15px;
@media only screen and (max-width:600px){
  flex-direction: column;
}
`;
const NavMenuItems=styled.li`
  
`;
const NavButton=styled.button`
  
`;
const Toggle=styled.div`
  display: none;
  @media only screen and (max-width:600px ){
  font-size: 8px;
  display: flex;
  align-items: center;
  }
  
`;
const Navbar = () => {
  const [isNavShowing,setIsNanShowing]=useState(false );
  const handleNavToggle=()=>{
    setIsNanShowing(!isNavShowing);
  }
  return (
    
  <nav>

<NavContainer>
  <LogoContainer>
    <Link to='/'> <Logo src={myImage}/></Link>
    <Toggle onClick={handleNavToggle}><FaBars/></Toggle>

  </LogoContainer>
  
  {isNavShowing?<NavMenu handleNavToggle={handleNavToggle}>
  <NavMenuItems><NavLink to='/features'>Features</NavLink></NavMenuItems>
  <NavMenuItems><NavLink to='/blog'>Blog</NavLink></NavMenuItems>
  <NavMenuItems><NavLink to='/features'>Features</NavLink></NavMenuItems>
  <NavMenuItems><NavLink to='/customerstories'>Customer Stories</NavLink></NavMenuItems>
  <NavMenuItems><NavLink to='/pricing'>Pricing</NavLink></NavMenuItems>
  <NavMenuItems><NavLink to='/signup'><NavButton>Sign Up</NavButton></NavLink></NavMenuItems>
  </NavMenu>
    :null}
 

</NavContainer>



  </nav>
  )
}

export default Navbar