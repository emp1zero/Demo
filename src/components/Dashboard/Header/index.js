import React from 'react'
import {
  BsFillBellFill,BsFillEnvelopeFill,
  BsPersonCircle,BsSearch,BsJustify
}from 'react-icons/bs'
import { HeaderContainer, HeaderLeft, HeaderRight,
   Iconstyles, MenuIcon } from './HeaderStyles'

const Header = () => {
  return (
    <HeaderContainer>
<MenuIcon>
 <Iconstyles><BsJustify/></Iconstyles> 
</MenuIcon>
<HeaderLeft>
  <Iconstyles><BsSearch/></Iconstyles>
</HeaderLeft>
<HeaderRight>
  <Iconstyles><BsFillBellFill/></Iconstyles>
  <Iconstyles><BsFillEnvelopeFill/></Iconstyles>
  <Iconstyles><BsPersonCircle/></Iconstyles>
</HeaderRight>
    </HeaderContainer>
  )
}

export default Header