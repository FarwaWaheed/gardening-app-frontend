import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from "./Screens/signUpScreen.jsx";
import Login from "./Screens/logInScreen.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
  </StrictMode>,
)
