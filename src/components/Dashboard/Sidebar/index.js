import React from 'react'
import { auth } from '../../../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { SideBarBrand, SideBarContainer, 
  Iconstyles,SideBarTitle,
IconClose, 
SideBarList,
SideBarItems,
SideBarHeaderColor,
IconHeader,
SideBarResponsive} from './SidebarStyles'
  import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,
  BsFillGrid3X3GapFill,BsPeopleFill,BsFillArrowLeftSquareFill,
BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'

const Sidebar = () => {
const navigate=useNavigate();

  const SignUserOut = async()=>{
    sessionStorage.clear();
    localStorage.clear();
    await signOut(auth);
    navigate('/signin');
   
  }
  return (
  
    
    
      <SideBarResponsive>
        <SideBarContainer>
      <SideBarTitle>
      <SideBarBrand>
      <SideBarHeaderColor to=''><IconHeader><BsCart3/></IconHeader>Shop</SideBarHeaderColor>
      </SideBarBrand>
      <IconClose>X</IconClose>
      </SideBarTitle>
      <SideBarList>

        <SideBarItems to=''>
            <Iconstyles><BsGrid1X2Fill/></Iconstyles>Dashboard
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsFillArchiveFill/></Iconstyles>Products
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsFillGrid3X3GapFill/></Iconstyles>Categories
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsPeopleFill/></Iconstyles>Customers
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsListCheck/></Iconstyles>Inventory
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsMenuButtonWideFill/></Iconstyles>Reports
        </SideBarItems>

        <SideBarItems to=''>
            <Iconstyles><BsFillGearFill/></Iconstyles>Settings
        </SideBarItems>

        <SideBarItems to='' onClick={SignUserOut}>
            <Iconstyles><BsFillArrowLeftSquareFill/></Iconstyles>Log Out
        </SideBarItems>

      </SideBarList>
      </SideBarContainer>
      </SideBarResponsive>
    
   
  )
}

export default Sidebar