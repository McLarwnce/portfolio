import React from "react";
import Card from "react-bootstrap/Card";
import vidmax from "../../work-img/1.png";
import dash from '../../work-img/2.png'
import monaliza from '../../work-img/3.png'
import crud from '../../work-img/4.png'
import weather from '../../work-img/5.png'
import movie from '../../work-img/6.png'
import "./Works.css"
import AnimatedPages from './../../AnimatedPages';

import { Row, Container, Col } from "react-bootstrap";
const Works = () => {
  return (
    <AnimatedPages>

      <div className="p-4 text-light">
        <h2 className="head-line">Portfolio</h2>

        <hr />
        <Container fluid className="works">
          <Row>
            <Col lg={4} md={12} sm={6} >


              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={vidmax}
                />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Youtube Max</Card.Title>
                  <Card.Text>
                    Exceptional video application  build by react leveraging the YouTube API.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50">Visit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={6} >
              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={dash} />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Dashboard</Card.Title>
                  <Card.Text>
                    React dashboard for user-friendly data visualization and management.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50">Visit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={6} >
              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={monaliza} />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Monaliza Movie</Card.Title>
                  <Card.Text>
                    Immerse in personalized movies with our seamless React app for browsing.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50">Visit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={6} >
              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={crud} />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Crud System</Card.Title>
                  <Card.Text>
                    Seamless data management with our JavaScript-powered CRUD system.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50">Visit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={6} >
              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={weather} />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Weather App</Card.Title>
                  <Card.Text>
                    Effortlessly check weather with our JavaScript app for a seamless experience.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50">Visit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={6} >
              <Card
                style={{
                  width: "100%",
                  color: "#FFF",
                  border: "none",
                  backgroundColor: "#444758",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              >
                <img variant="top" src={movie} />
                <Card.Body style={{ padding: "0.5rem", fontSize: "12px" }}>
                  <Card.Title>Movie & Series</Card.Title>
                  <Card.Text>
                    indulge in the world of movies and series with our immersive app.
                  </Card.Text>
                  <button className="btn btn-outline-light btn-sm w-50 ">Visit</button>
                </Card.Body>
              </Card>
            </Col>


          </Row>
        </Container>
      </div>
    </AnimatedPages>

  );
};

export default Works;
