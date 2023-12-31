import React from 'react';
import './navTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav-container'>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              PORTFOLIO
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
