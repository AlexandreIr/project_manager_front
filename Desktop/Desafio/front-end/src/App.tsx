import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    {localStorage.getItem('token')&&<InitialPage/>}
    <LoginPage/>
    </>
  )
}

export default App;
