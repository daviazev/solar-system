import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div data-testid="missions">
      <div>
        <h1>Missões</h1>
      </div>
      <div className="missions-container">
        {missions.map((mission) => (<MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />))}
      </div>
    </div>
  );
}

export default Missions;
