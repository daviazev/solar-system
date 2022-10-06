import React from 'react';

import solarSistemLogo from '../images/solarSystemLogo.svg';

function Header() {
  return (
    <header>
      <img
        className="solar-system-logo"
        src={ solarSistemLogo }
        alt="solar system logo"
      />
    </header>
  );
}

export default Header;
