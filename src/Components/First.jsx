import React from 'react';
import Header from "./Header"; // ✅ Correct default import
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function First() {
  return (
    <div>
      <Header isVisible={true} /> 
      <Outlet />
      <Footer/>
    </div>
  );
}

export default First;
