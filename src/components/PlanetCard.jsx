import React from 'react';
import PropTypes from 'prop-types';

import '../styles/planets.css';

function PlanetCard({ planetName, planetImage }) {
  console.log(planetName);
  const planet = `Planeta ${planetName}`;
  return (
    <div data-testid="planet-card">
      <img src={ planetImage } alt={ planet } className={ planetName } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
