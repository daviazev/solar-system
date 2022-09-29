import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planet = `Planeta ${planetName}`;
    return (
      <div className="planet-card" data-testid="planet-card">
        <img src={ planetImage } alt={ planet } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: 'Terra',
  planetImage: './images/Terra.png',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
