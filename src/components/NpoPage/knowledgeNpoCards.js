import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Brightfuture from "../../images/NpoPage/Brightfuture.png";
import Educationforall from "../../images/NpoPage/Educationforall.png";
import GirlsEdu from "../../images/NpoPage/GirlsEdu.png";

const KnowledgeNpoCards = () => {
  const KnowledgeNpoCard = [
    /** ID = 1 + 2 + 3 = Water. ID = 4 + 5 + 6 = Knowledge**/
    {
      id: 1,
      imageSrc: GirlsEdu,
      name: "Girls Edu.",
      text: "Girls Edu. is small non-profit organization that provides education to girls in the S.W.A.T region in Pakistan.",
      buttonURL: "/NpoPages/GirlsEdu",
    },
    {
      id: 2,
      imageSrc: Brightfuture,
      name: "Bright future",
      text: "Bright future is a non-profit organization that provides education for refugee children.",
      buttonURL: "/NpoPages/BrightFuture",
    },
    {
      id: 3,
      imageSrc: Educationforall,
      name: "Education for All",
      text: "Education for all, is working towards providing caring support for children in different situations.",
      buttonURL: "/NpoPages/EducationForAll",
    },
  ];

  const npoKnowledgeCards = [];
  KnowledgeNpoCard.forEach((card) => {
    npoKnowledgeCards.push(
      <Card id={card.id} style={cardStyle} className="py-3">
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
              className="d-none d-sm-none d-md-none d-lg-none d-xl-block
               img-fluid"
              src={card.imageSrc}
            />
          </Col>
        </Row>
      </Card>
    );
  });

  return <div>{npoKnowledgeCards}</div>;
};
export default KnowledgeNpoCards;

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  fontSize: 18,
  fontWeight: 500,
  width: 144,
  height: 45,
  borderRadius: 10, 
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  border: 'none'

};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  borderRadius: 20,
  marginTop: 15
};

const titleStyle = {
  color: " #0D2E6E",
  fontSize: 18,
  fontWeight: 700,
  textAlign: "left",
};

const textStyle = {
  color: " #0D2E6E",
  fontSize: 17,
  textAlign: "left",
  height: 157,
  fontWeight: 400,
  fontFamily: 'Helvetica'
};

const Icons = {
  maxWidth: 166,
  maxHeight: 176,
  borderRadius: 20,
};
