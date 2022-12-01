import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <div className="bookmarks">
        <Link to="/bookmarks" className='link'>Bookmarks</Link>
      </div>
    </div>
  );
}

export default Nav;
