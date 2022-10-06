import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main-father">
        <div className="main">
          <div className="solar-system-content">
            <Header />
            <SolarSystem />
          </div>
          <Missions />
        </div>
      </div>
    );
  }
}

export default App;
