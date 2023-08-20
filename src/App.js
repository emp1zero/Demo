import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { createGlobalStyle ,} from 'styled-components';
import Home from './pages'
import SigninPage from './pages/signin'
import DashboardPage from './pages/dashboard';
import CreateAccountPage from './pages/createaccount';





const GlobalStyles= createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing :border-box;
      font-family: 'Encode Sans Expanded', sans-serif;
    }
`;

const App = () =>{
 
  
  return (
    <>
      <GlobalStyles/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/signin' element={<SigninPage/>}/>
   <Route path='/createaccount' element={<CreateAccountPage/>}/>
   <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
  }

export default App;
