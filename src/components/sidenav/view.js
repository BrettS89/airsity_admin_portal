import React from 'react';

export default function sidenavView({ renderSideNav, screen }) {
  const styles = screen === 'login'
    ? { display: 'none' }
    : {};

  return (
    <div className="top-space side-nav" style={ styles }>
      {renderSideNav()}
    </div>
  );
}
