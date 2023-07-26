import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { createGlobalStyle ,} from 'styled-components';
import Home from './pages'
import { useState } from 'react';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Footer from './components/Footer';


const GlobalStyles= createGlobalStyle`
    *, *::before,*::after{
      margin: 0;
      padding: 0;
      box-sizing :border-box;
    }
    
`;

const App = () =>{
  const [isOpen,setIsOpen]=useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <GlobalStyles/>
    <BrowserRouter>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/signin' element={<SigninPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
  }

export default App;
