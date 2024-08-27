import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/index.jsx'
import { About } from './components/About/index.jsx'
import { Menu } from './components/Menu/index.jsx'
import { Posts } from './components/Posts/index.jsx'
import { Redirect } from './components/Redirect/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/redirect' element={<Redirect/>}/>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
