import React from 'react';
import PropTypes from 'prop-types';

import '../styles/MissionCard.css';

import calendar from '../images/calendar.svg';
import flag from '../images/flag.svg';
import locationIcon from '../images/locationIcon.svg';

function MissionCard({ name, year, country, destination }) {
  return (
    <div className="missions-card" data-testid="mission-card">
      <div className="mission-name">
        <p data-testid="mission-name">{name}</p>
      </div>
      <hr />
      <div className="main-content">
        <div className="mission-infos" data-testid="mission-year">
          <img className="icon" src={ calendar } alt="icon of a calendar" />
          <span>{year}</span>
        </div>
        <div className="mission-infos" data-testid="mission-country">
          <img
            className="icon"
            src={ flag }
            alt="icon of a flag"
          />
          <span>
            {country}

          </span>
        </div>
        <div className="mission-infos">
          <img className="icon" src={ locationIcon } alt="location icon" />

          <span
            data-testid="mission-destination"
          >
            {destination}
          </span>
        </div>
      </div>
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
