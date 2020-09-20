import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

const Experience = () => {
  return (
    <div id="experience">
      <Zoom duration={2000}>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      </Zoom>
      <div className="border"></div>
      
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
          <Flip left duration={2000}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Education Department.</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> Al faisal Town, Saddar , Airport
                    <br />
                    <strong>Role:</strong> Give Knowldge
                    <br />
                    <strong>Description:</strong> “Education is the most powerful weapon which you can use to change the world”
                    <br />
                    <strong>Description:</strong> Live as if you were to die tomorrow. Learn as if you were to live forever
                    <br />
                    <strong>Duration:</strong> June 2010 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Flip>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
