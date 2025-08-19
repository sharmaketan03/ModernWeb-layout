import React, { useEffect } from 'react';
import Header from "./Header"; // ✅ Correct default import
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import '../App.css'

function First() {
  const navigate=useNavigate()
  useEffect(()=>{
     const navType=performance.getEntriesByType('navigation')[0]?.type
     if(navType=='reload'){
      navigate('/')
     }
  },[])
  return (
    <div>
      <Header isVisible={true} /> 
      <Outlet />
      <Footer/>
    </div>
  );
}

export default First;
