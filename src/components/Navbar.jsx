import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import myImage from '../images/logo.svg'
import {Link as LinkR,} from 'react-router-dom'
import  {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {FaWindowClose} from 'react-icons/fa'

const Nav=styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width:960px) {
    transition: 0.8s all ease ;
  }
`;
const NavContainer=styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
  background-color: black;
`;
const NavLogo=styled(LinkR)`
  color:#fff;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
const ToggleIcon=styled.div`
  display: none;
  @media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    color:#fff;
    right: 0;
    transform: translate(-100px,60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu =styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width:768px){
    display: none;
  }
`;
const NavItem= styled.li`
  height: 80px;

`;
const NavLinks= styled(LinkS)`
color:#fff;
align-items:center;
height:100%;
display:flex;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
&:active{
  border-bottom: 3px solid #01bf71;
}
`;
const NavButton = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width:768px){
    display: none;
  }
`;
const NavButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition:all 0.2s ease-in-out; 
    background:#fff;
    color: #010606;
  }
`


const Navbar = ({toggle}) => {
  return (

    <Nav>
      <NavContainer>
        <NavLogo to='/'>HeavensGym</NavLogo>
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
            <NavLinks to='/services'>Services</NavLinks>
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


export default Navbar