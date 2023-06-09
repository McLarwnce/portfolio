import React from "react";
import "./Home.css";
import Sidebar from "../sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../header/Header";
import Content from "../content/Content";
const Home = () => {
  return (
    <Container fluid >
      <Row >
        <Col lg={4} md={6} sm={12}>
          <Sidebar />
        </Col>
        <Col lg={8} md={6} sm={12}>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <Content />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
