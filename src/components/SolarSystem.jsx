import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planets-div" data-testid="solar-system">
        <div className="h2-planets">
          <Title />
        </div>
        <div className="planet-card-father">
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
