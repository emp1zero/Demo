import React from 'react'
import InfoSection from '../components/InfoSection'
import WelcomePage from '../components/WelcomePage'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'


const Home = () => {
   
      return (
        <>
        <WelcomePage/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        </>
       
      )
    }
    
    export default Home