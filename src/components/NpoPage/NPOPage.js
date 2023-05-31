import "../../index.css";
import React from "react";
import WaterNpoCards from "./waterNpoCards";
import KnowledgeNpoCards from "./knowledgeNpoCards";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SanitaryConditions from "../../images/NpoPage/SanitaryConditions.png";
import SustainableAgriculture from "../../images/NpoPage/SustainableAgriculture.png";
import ClimateAction from "../../images/NpoPage/ClimateAction.png";
import Education from "../../images/NpoPage/Education.png";
import OpenAccessScience from "../../images/NpoPage/OpenAccessScience.png";
import FightingMisinformation from "../../images/NpoPage/FightingMisinformation.png";

const NPOPage = () => {
  return (
    <Container className="container-fluid">
      <Row className="mx-auto text-center w-75">
        <h1 className="mb-5" style={npoHeader}>Non-profit organizations</h1>
        <p className="text-sm-start fw-bold" style={fontNpoSize}>
          Our non-profit organizations are carefully selected, based on what our
          team considers most vital, also encompassing several of the UNs 17
          goals for Social Development. The criterias for our pre-selected
          non-profit organizations will make sure that the relationship between
          the non-profit and companies are transparent and based on mutual
          trust.
        </p>
        <p className="text-sm-start" style={fontNpoSize}>
          Meliora Impact focuses on two main categories of non-profit work:{" "}
          <strong>Water & knowledge.</strong>
        </p>
      </Row>
      <Row className="pt-5 pb-3 mx-auto text-center w-75">
        <Col className="mt-2 sm-6 text-white">
          <Card className="px-5 py-3" style={Box}>
            <h3 style={fontSize}>WATER</h3>
            <p className="ps-auto" style={WaterKnowledgeBox}>
              <img
                className="m-2"
                style={Icons}
                src={SanitaryConditions}
                alt=" "
              />
              Sanitary conditions <br />
              <img
                className="m-2"
                style={Icons}
                src={SustainableAgriculture}
                alt=" "
              />
              Sustainable agriculture <br />
              <img className="m-2" style={Icons} src={ClimateAction} alt=" " />
              Climate action <br />
            </p>
          </Card>
        </Col>
        <Col className="mt-2 sm-6 text-white">
          <Card className="px-5 py-3" style={Box}>
            <h3 style={fontSize}>KNOWLEDGE</h3>
            <p className="ps-auto" style={WaterKnowledgeBox}>
              <img className="m-2" style={Icons} src={Education} alt=" " />
              Education <br />
              <img
                className="m-2"
                style={Icons}
                src={OpenAccessScience}
                alt=" "
              />
              Open-access science <br />
              <img
                className="m-2"
                style={Icons}
                src={FightingMisinformation}
                alt=" "
              />
              Fighting misinformation <br />
            </p>
          </Card>
        </Col>
      </Row>
      <Row className="py-5 my-3 mx-auto w-75" style={WhiteBox}>
        <Row className="d-flex">
          <Col md={{ span: 10, offset: 1 }}>
            <h3 style={{fontWeight: 600, fontFamily: 'helvetica', fontSize: 24}} className="pb-2 text-center">
              Criteria on selection of non-profits
            </h3>
            <p className="mx-auto text-start px-4" style={criText}>
              How do we select our non-profit organizations? Meliora Impact has
              a set of criterias for the application of non-profit
              organizations. This is to ensure transparency and liability
              towards all of our partners.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-md-flex justify-content-md-end pe-5 me-5">
            <Button className="mx-5" style={BtnStyle}>
              <Link to={"/Criterias"} className="text-white routing">
                Read more
              </Link>
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="mx-auto text-center w-75">
        <Col className="mt-2 col-lg-6 col-md-12 col-sm-12">
          <Card style={cardStyle}>
            <h1 className="py-5 pb-3" style={h1Style}>
              WATER
            </h1>
            <Card.Body>
              <WaterNpoCards />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2 col-lg-6 col-md-12 col-sm-12">
          <Card style={cardStyle}>
            <h1 className="py-5 pb-3" style={h1Style}>
              KNOWLEDGE
            </h1>
            <Card.Body>
              <KnowledgeNpoCards />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NPOPage;

const criText = {
  fontSize: 20,
  fontFamily: 'arial'
};

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  fontSize: 20,
  borderRadius: 10,
  fontWeight: 400,
  width: 150
};

const fontSize = {
  fontSize: 24,
  fontFamily: 'Arial',
};

const Box = {
  backgroundColor: "#0D2E6E",
  fontSize: 18,
  fontWeight: "bold",
  borderRadius: 10,
};

const WaterKnowledgeBox = {
  textAlign: "left",
};

const Icons = {
  width: 27,
  height: 27,
};

const WhiteBox = {
  backgroundColor: "white",
  color: "#0D2E6E",
  borderRadius: 10,
  maxWidth: 910,
  minWidth: 180
};

const cardStyle = {
  backgroundColor: "transparent",
  borderColor: "white",
  border: "5px solid white",
  borderRadius: 20,
};

const h1Style = {
  color: " #0D2E6E",
  fontWeight: 500,
};

const fontNpoSize = {
  fontSize: 20,
  color: "black",
};

const npoHeader = {
  color: "white",
  fontSize: 36,
};
