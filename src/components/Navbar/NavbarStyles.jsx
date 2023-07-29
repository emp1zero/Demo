import styled from 'styled-components'
import {Link as LinkR,} from 'react-router-dom'
import  {Link as LinkS} from 'react-scroll'


export const Nav=styled.nav`
  height: 80px;
  background:${({scrollNav})=>(scrollNav ? '#000':'#040f0b' )};
  transition: 0.8s ease-in;
  display: flex;
  align-items: center;
  margin-bottom: -80px;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width:960px) {
    transition: 0.8s all ease ;
  }
`;
export const NavContainer=styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
 
`;
export const NavLinkLogo=styled(LinkR)`
   justify-content: flex-start;
   display: flex;
   align-items: center;
`;
export const Logo=styled.img`
  cursor: pointer;
  width: 100px;
  height: 100px;
`
export const ToggleIcon=styled.div`
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
export const NavMenu =styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width:768px){
    display: none;
  }
`;
export const NavItem= styled.li`
  height: 80px;

`;
export const NavLinks= styled(LinkS)`
color:#fff;
align-items:center;
height:100%;
display:flex;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;

&:hover{
  border-bottom: 3px solid #01bf71;
}

&.active{
  border-bottom: 3px solid #01bf71;
}
`;
export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width:768px){
    display: none;
  }
`;
export const NavButtonLink = styled(LinkR)`
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