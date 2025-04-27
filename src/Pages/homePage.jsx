import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ValueBanner from '../components/ValueBanner';
import MoreFeaturesSection from '../components/MoreFeaturesSection';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { Alert, Collapse } from '@mui/material';



export default function Home() {

    const [open, setOpen] = useState(true);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');


    useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('userRole');
    if (storedName, storedRole) {
      setUserName(storedName);
      setUserRole(storedRole);
      }
    }, []);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  

    return (
      <div className="font-sans">
        <Navbar />
        
        <div className="mt-4 mb-4">
        {(userRole === 'gardener' ) && (
          <Collapse in={open}>
            <Alert  variant="filled" severity="success" onClose={handleClose}>
            Welcome Gardner, {userName}! Ready to grow? 🌱
            </Alert>
          </Collapse>
      )}
      {(userRole === 'home-owner' ) && (
          <Collapse in={open}>
            <Alert variant="filled" severity="success" onClose={handleClose}>
            Welcome Home-Owner, {userName}! Your garden awaits 🌸
            </Alert>
          </Collapse>
      )}
      {(userRole === 'supervisor' ) && (
          <Collapse in={open}>
            <Alert variant="filled" severity="success" onClose={handleClose}>
            Welcome Supervisor, {userName}!
            </Alert>
          </Collapse>
      )}
      {(userRole === 'admin' ) && (
          <Collapse in={open}>
            <Alert variant="filled" severity="success" onClose={handleClose}>
            Welcome Admin, {userName}!
            </Alert>
          </Collapse>
      )}
      </div>
        
        <HeroSection />
        <CategorySection/>
        <ValueBanner/>
        <MoreFeaturesSection/>
        < Footer />
        
      </div>
    );
  }