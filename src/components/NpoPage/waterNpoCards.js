import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SaveAralSea from "../../images/NpoPage/SaveAralSea.png";
import Savetheocean from "../../images/NpoPage/Savetheocean.png";
import ForestationPRJCT from "../../images/NpoPage/ForestationPRJCT.png";

const WaterNpoCards = () => {
  const WaterNpoCard = [
    /** ID = 1 + 2 + 3 = Water. ID = 4 + 5 + 6 = Knowledge**/
    {
      id: 1,
      imageSrc: Savetheocean,
      name: "Save the Ocean",
      text: "Save the Ocean is a non-profit organization in Brazil that works with cleaning the sea from plastic.",
      buttonURL: "/NpoPages/SaveTheOcean",
    },
    {
      id: 2,
      imageSrc: ForestationPRJCT,
      name: "Forestation PRJCT",
      text: "Forestation PRJCT is a non-profit organization in Thailand that works with mangrove planting.",
      buttonURL: "/NpoPages/ForestationPrjct",
    },
    {
      id: 3,
      imageSrc: SaveAralSea,
      name: "#SaveAralSea",
      text: "#Save Aral Sea is a local initative to plant trees in the deserted area of Aral Sea region.",
      buttonURL: "/NpoPages/SaveAralSea",
    },
  ];

  const npoPageCards = [];
  WaterNpoCard.forEach((card) => {
    npoPageCards.push(
      <Card id={card.id} style={cardStyle} className=" py-3">
        <Row className="g-0">
          <Col className="col-6 d-grid">
            <Card.Body>
              <Card.Title style={titleStyle}>{card.name}</Card.Title>
          <Row>
            <Col>
              <img
                  style={Icons}
                  className="mb-3 d-xs-block d-sm-block d-md-block d-lg-block d-xl-none
                  img-fluid"
                  src={card.imageSrc}
                  />
            </Col>
          </Row>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <br />
              <div className="d-flex justify-content-center gap-1">
                <Button href={card.buttonURL} style={BtnStyle}>
                  Read more
                </Button>
              </div>
            </Card.Body>
          </Col>
          <Col className="col-6 pt-5">
            <img
              style={Icons}
              className="d-none d-xs-none d-sm-none d-md-none d-lg-none d-xl-block
              img-fluid"
              src={card.imageSrc}
            />
          </Col>
        </Row>
      </Card>
    );
  });

  return <div>{npoPageCards}</div>;
};
export default WaterNpoCards;

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  fontSize: 18,
  width: 144,
  height: 45,
  borderRadius: 10,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontWeight: 500,
  border: 'none'
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  borderRadius: 20,
  marginTop: 15,
};

const titleStyle = {
  color: " #0D2E6E",
  fontSize: 18,
  fontWeight: 700,
  textAlign: "left",
};

const textStyle = {
  color: " #0D2E6E",
  fontSize: 18,
  textAlign: "left",
  height: 157,
  fontFamily: 'Helvetica'

};

const Icons = {
  maxWidth: 166,
  maxHeight: 176,
  borderRadius: 20,
};
