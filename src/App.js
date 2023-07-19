import Home from './pages/home/Home.jsx';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
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
    <Home/>
    <Routes>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
  }

export default App;
