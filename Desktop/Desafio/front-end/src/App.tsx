import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      {localStorage.getItem('token')?<InitialPage/>:<LoginPage/>}
    </div>
  )
}

export default App;
