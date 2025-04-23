import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from "./screens/signUpScreen.jsx";
import Login from './screens/logInScreen.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
    <Login />
  </StrictMode>,
)
