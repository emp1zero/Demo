import {React,useState} from 'react'
import InfoSection from '../components/InfoSection'
import WelcomePage from '../components/WelcomePage'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Home = () => {
  const [isOpen,setIsOpen]=useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  
      return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <WelcomePage/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
        </>
       
      )
    }
    
    export default Home