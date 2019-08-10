import React from 'react';
import { Link } from 'react-router-dom';

export default function navCard({ nav, screen }) {
  const setClass = screen === nav.params
    ? 'nav-card-cont active-card'
    : 'nav-card-cont'

  return (
    <div className={setClass}>
      <Link to={nav.url}>
        <div className="nav-card">
          <div className="sidenav-content">
            <span className="icon-span"><i className={nav.icon}></i></span>
            <span className="text-span">{nav.name}</span>
          </div>  
        </div>
      </Link>
    </div>
  );
}
