import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ModernSchoolContent from './Components/About.jsx'
import  Router from './Components/Router.jsx'

createRoot(document.getElementById('root')).render(
 
    <Router />
 
)
