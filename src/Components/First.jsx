import React from 'react';
import Header from "./Header"; // ✅ Correct default import
import { Outlet } from 'react-router-dom';

function First() {
  return (
    <div>
      <Header isVisible={true} /> 
      <Outlet />
    </div>
  );
}

export default First;
