import React,{useState} from 'react'
import Siderbar from '../../components/sidebar/Siderbar'
import Navbar from '../../components/Navbar'

const Home = () => {
const [isOpen,setIsOpen]=useState(false)
const toggle = ()=>{
  setIsOpen(!isOpen)
}

  return (
    <>
     <Siderbar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    </>
   
  )
}

export default Home