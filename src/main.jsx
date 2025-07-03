import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="PranetraVyas" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
