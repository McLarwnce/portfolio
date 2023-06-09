import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <Container fluid className="body">
        <Row>
          <Col lg={4} md={6} sm={12} className="">
            <Sidebar />
          </Col>
          <Col lg={8} md={6} sm={12}>
            <Row>
              <Col>
                <Header />
              </Col>
            </Row>
            <Row>
              <Container>
                <Col className="mt-1 content-header ">
                  <Outlet>
                  </Outlet>
                </Col>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
