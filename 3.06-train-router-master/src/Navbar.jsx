import React from 'react';

function Navbar() {
  return (
    <header>
      <h1>Where's The Frickin Train</h1>
      <nav>
        <Link to ="/union-square">Union Square-14th St</Link>
        <Link to ="/times-square">Times Square-42nd St</Link>
        <Link to ="/atlantic-avenue">Atlantic Avenue</Link>
        <Link to ="/fulton-street">Fulton Street</Link>
        <Link to ="/125 St">a good place to throw up</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}

export default Navbar;
