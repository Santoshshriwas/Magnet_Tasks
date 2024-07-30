import React from 'react';
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <div>Magnet Brains</div>
        </div>
        <div className='nav-center'>
          <Link to="insert">Insert Task</Link>
          
        </div>
        <div>
          <div>image</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
