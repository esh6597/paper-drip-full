//UI sidebar component

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return(
    <div className='sidebar'>
      <Link to="/">
          Home
      </Link>
      <Link to="/about">
          About
      </Link>
      <Link to="/blog">
          Blog
      </Link>
      <Link to="/shop">
          Shop
          {props.sidebarOpen && 'Sidebar Props Test'}
      </Link>
    </div>
  );
};

export default Sidebar;