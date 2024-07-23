import { Route, Routes } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import CreateUserPage from './pages/CreateUserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={localStorage.getItem('token')?
        <InitialPage/>:
        <LoginPage/>}/>
        <Route path='/registration' element={<CreateUserPage/>}/>
        <Route path='/create' element={<CreateProjectPage/>}/>
      </Routes>
    </>
  )
}

export default App;
