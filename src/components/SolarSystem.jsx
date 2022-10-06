import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planets-main-div" data-testid="solar-system">
        <div className="h2-planets">
          <h1>Planetas</h1>
        </div>
        <div className="planets-section">
          {Planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
