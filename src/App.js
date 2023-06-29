import Home from './pages/home/Home.jsx';
import Blog from './pages/blog/Blog.jsx';
import Customerstories from './pages/customerstories/Customerstories.jsx';
import Features from './pages/features/Features.jsx';
import Pricing from './pages/pricing/Pricing.jsx';
import Signup from './pages/signup/Signup.jsx';
import Notfound from './pages/notfound/Notfound.jsx';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { createGlobalStyle ,ThemeProvider} from 'styled-components';





const GlobalStyles= createGlobalStyle`
    *, *::before,*::after{
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      list-style:none;
      text-decoration: none;
      box-sizing: border-box;
    }
    body{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color:${(props)=>props.theme.colors.dark};
      overflow-x: hidden;
      line-height: 1.7;
     
    }
`;

const theme={
    colors:{
        primary:'#fcfcfc',
        secondary:'#080c16',
        neutral:'#d6dae5',
        tertiary:'#eafaf1',
        dark:'#00ad6a',
        light:'#1fe374'
},
};



const App = () =>{
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/features' element={<Features/>}/> 
     <Route path='/customerstories' element={<Customerstories/>}/> 
     <Route path='/pricing' element={<Pricing/>}/> 
     <Route path='/blog' element={<Blog/>}/> 
     <Route path='/signup' element={<Signup/>}/> 
     <Route path='/notfound' element={<Notfound/>}/> 
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
  }

export default App;
