import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />}></Route>
      </Route>
      <Route path='/app' element={<App />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
