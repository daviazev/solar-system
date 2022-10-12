import React from 'react';
import PropTypes from 'prop-types';

import '../styles/MissionCard.css';

function MissionCard({ name, year, country, destination }) {
  return (
    <div className="missions-card" data-testid="mission-card">
      <div className="mission-name">
        <p data-testid="mission-name">{name}</p>
      </div>
      <hr />
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
