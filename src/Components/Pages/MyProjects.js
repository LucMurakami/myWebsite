import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';


class MyProjects extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>
          My Projects
        </h1>
        <p>
          Click on the project name to find out more about it.
        </p>
        <div>
          <Panel id="UmiSushiApp" >
            <Panel.Heading>
              <Panel.Title toggle>
                <h2>
                  UmiSushiApp
                </h2>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <h4>
                  The Traditional Menu Reimagined!
                </h4>
                <p>
                  We sought to reimagine the traditional menu with the goal of making ordering
                  easier for both customers and restaurant owners through the use of an Android
                  based menu application.
                </p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

          <br />

          <Panel id="RealTimeRides" >
            <Panel.Heading>
              <Panel.Title toggle>
                RealTimeRides
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                RealTimeRides Description
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

          <br />

          <Panel id="ESurvey" >
            <Panel.Heading>
              <Panel.Title toggle>
                ESurvey
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                ESurvey Description
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      </div>
    );
  }
}

export default MyProjects;
