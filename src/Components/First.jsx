import React, { useEffect } from 'react';
import Header from "./Header"; // ✅ Correct default import
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

function First() {
  const navigate=useNavigate()
  useEffect(()=>{
      navigate('/')
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
