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
        <br /> 
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
                <h3>
                  The Traditional Restaurant Menu Reimagined!
                </h3>
                <p>
                  We sought to reimagine the traditional menu with the goal of making ordering
                  easier for both customers and restaurant owners through the use of an Android
                  based menu application.
                </p>
                <h4>
                  Technologies Used:
                </h4>
                <p>
                 Android Studio, Google Firebase, Java
                </p>
                <h4>
                  Development:
                </h4>
                <p>
                  Developed by a three person team, we meet periodically during the winter break in
                  our free time to design, plan, and develop this mobile app. Some challenges we faced
                  was learning a new technology quickly, and our far geographic location from each other,
                  but the lessons learned from this experience is invaluable.
                </p>
                <h4>
                  Status:
                </h4>
                <p>
                  Currently In Development
                </p>
                <h4>
                  Pictures:
                </h4>
                <p>
                  Currently In Development
                </p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

          <br />

          <Panel id="RealTimeRides" >
            <Panel.Heading>
              <Panel.Title toggle>
                <h2>
                  RealTimeRides
                </h2>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <h3>
                  A Carless Student's Dream!
                </h3>
                <p>
                  As a student who didn't previously have a car, I can relate to wanting a ride when
                  none were available. To solve this, we came up with the idea for a BCIT rideshare 
                  mobile application.
                </p>
                <h4>
                  Technologies Used:
                </h4>
                <p>
                 Xcode, Swift, Google Firebase
                </p>
                <h4>
                  Development:
                </h4>
                <p>
                  The goal of this project was the foster familiarity with Swift, as it utilized a 
                  language we were not familiar with yet. Our two person group used tutorials and
                  online resources to gain a working knowledge of how Xcode worked, building a 
                  multi-tabbed iOS app that allows users to post rides, view their posted rides and
                  view their profile. Future development will be centered around developing a central
                  tab for rides posted in the user's vicinity, and a messaging function so users can
                  converse with those offering rides.
                </p>
                <h4>
                  Status:
                </h4>
                <p>
                  Currently In Development
                </p>
                <h4>
                  Pictures:
                </h4>
                <p>
                  Currently In Development
                </p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

          <br />

          <Panel id="ESurvey" >
            <Panel.Heading>
              <Panel.Title toggle>
                <h2>
                  ESurvey (BCIT Hackathon)
                </h2>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <h3>
                  Why Are Teacher Evaluations Not Digitized At BCIT!
                </h3>
                <p>
                  The first annual BCIT Hackathon was held early this January for students who
                  got into co-op, a 50 student program where entry is based on GPA alone. We
                  were divided into groups of five randomly selected students, all who had
                  different levels of coding knowledge, and we were tasked with coming up with
                  conceptualization, development, and deployment of a project that would
                  benefit BCIT students, all within roughly 30 hours. 
                </p>
                <p>
                  Our group, called Team E-Survey, decided to create an online teacher survey
                  to replace the Teacher Evaluations at BCIT which are currently done using 
                  scantron pages.
                </p>
                <h4>
                  Technologies Used:
                </h4>
                <p>
                 MySQL, PHP, JavaScript, Html, CSS
                </p>
                <h4>
                  Development:
                </h4>
                <p>
                  Conceptualization was a challenging portion as we had to consider a project
                  which encompassed the development comfort level of all members, however, this
                  taught me valuable lessons on the division of tasks, as some members were 
                  very experienced with front end design, and some with back end, and this
                  specialization produced a product that was very polished. Development challenges
                  included learning to work with new languages such as MySQL. This was my first
                  exposure to the language, although I studied basic database concepts before.
                  Thus, the learning curve was higher, but I compensated by putting more time
                  in and I was rewarded by effectively contributing to the backend development.
                </p>
                <h4>
                  Status:
                </h4>
                <p>
                  Deployed
                </p>
                <h4>
                  Pictures:
                </h4>
                <p>
                  Currently In Development
                </p>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      </div>
    );
  }
}

export default MyProjects;
