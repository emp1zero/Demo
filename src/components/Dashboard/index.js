import React from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import { DashboardContainer } from './Dashboard'
import { useState } from 'react'

const Dashboard = () => {


  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

 
  return (
    <DashboardContainer>
      <Header toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Main/>
      
   </DashboardContainer>
   
  )
}

export default Dashboard