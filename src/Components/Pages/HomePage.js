import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Headshot from './Headshot.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
      
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <h1>
              Who Am I?
            </h1>
            <p>
              Hi! My name is Luc Murakami and I am a student currently studying at BCIT
              in the CST program. Curious in nature, and relentless in my work ethic, I 
              want to learn everything there is to know about the technology field and
              cut out my own, unique path.
            </p>
            <p>
              Previously, I went to UBC and graduated with a Bachelors of Science
              in Biology. During my time at UBC I was lucky enough to be involved in the
              co-op program and worked in the academic research field for a year. This
              was a year of self discovery and learning, and I am very thankful that I was
              able to experience living independantly. It was during this time that I started
              looking into coding as we were using macros to make work more efficient.
            </p>
            <p>
              Computers have always been a topic of interest for me, even when I was a young
              child. I would also always take electronic devices apart to see how they worked
              on the inside, and I think this curiosity has followed me throughout my life. 
              I know that if I don't understand something at first, the answer is just a few 
              hours of investigation and experimentation away.
            </p>
            <p>
              After my co-op experience I returned to school to finish my Bachelors. I felt
              it was important to finish what I had started, but I knew in my heart that 
              programming and technology was where I really should be. Thus, after I graduated
              I went directly to BCIT to pursue a degree in Computer System Technology and I 
              haven't looked back since.
            </p>
            <p>
              Look out world, here I come!
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img src={Headshot} alt="headshot" id="headshot" />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default HomePage;
