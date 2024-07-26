import { Route, Routes } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import CreateUserPage from './pages/CreateUserPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={localStorage.getItem('token')?
        <InitialPage/>:
        <LoginPage/>}/>
        <Route path='/registration' element={<CreateUserPage/>}/>
        <Route path='/create' element={<CreateProjectPage/>}/>
        <Route path='/project/:id' element={<ProjectPage/>}/>
      </Routes>
    </>
  )
}

export default App;
