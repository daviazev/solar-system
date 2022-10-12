import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

import linkedin from './images/linkedin.svg';
import github from './images/github.svg';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main-father">
          <div className="main">
            <div className="solar-system-content">
              <Header />
              <SolarSystem />
            </div>
            <Missions />
          </div>
        </div>
        <div className="footer-main-div">
          <div>
            <span>Feito por Davi Azevedo</span>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/davi-azevedo-a62267206/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-medias"
                src={ linkedin }
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/daviazev" target="_blank" rel="noreferrer">
              <img
                className="social-medias"
                src={ github }
                alt="github icon"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
