import { Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const FPButtons = () => {
    return (
        <Container className="container-fluid">
            <Row className="text-center">
                <Row className="mx-auto w-auto">
                    <Col className="fw-bold mx-2" style={BtnStyle}>
                        <h3 style={textStyle}><Link to={"/NPOPage"} className="text-white routing">CURRENT PROJECTS</Link></h3>
                    </Col>

                    <Col className="fw-bold mx-2" style={BtnStyle}>
                        <h3 style={textStyle}><Link to={"/Page3"} className="text-white routing">FOR COMPANIES</Link></h3>
                    </Col>

                    <Col className="fw-bold mx-2" style={BtnStyle}>
                        <h3 style={textStyle}><Link to={"/Page4"} className="text-white routing">FOR NON-PROFITS</Link></h3>
                    </Col>
                </Row>

            </Row>
        </Container>
    )
};
export default FPButtons;



const textStyle = {
    marginTop: 65,
    color: "#FFFFFF",
    fontSize: 'calc(0.5em + 1.2vw)',
  }

const BtnStyle = {
    backgroundColor: "#0D2E6E",
    width: 290,
    height: 160,
    marginTop: 15,
    marginBottom: 100,
    borderRadius: 10


};