import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import Playercontextprovider from "./context/playercontext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Playercontextprovider>
    <App/>  
   </Playercontextprovider>
    </BrowserRouter>
  </StrictMode>,
)
