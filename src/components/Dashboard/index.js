import React from 'react'
import { ButtonContainer,Button } from './Dashboard'
import { auth } from '../../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import { DashboardContainer } from './Dashboard'

const Dashboard = () => {

const navigate=useNavigate();

const [user]=useAuthState(auth);
  const SignUserOut = async()=>{
    sessionStorage.clear();
    localStorage.clear();
    await signOut(auth);
    navigate('/signin');
   
  }

 
  return (
    <DashboardContainer>
      <Header/>
      <Main/>
      <Sidebar/>
   </DashboardContainer>
   
  )
}

export default Dashboard