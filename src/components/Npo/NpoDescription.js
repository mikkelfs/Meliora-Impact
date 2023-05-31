import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../index.css"

const NpoDescription = () => {
  return (
    <Container>
      <Row className="text-center py-4">
        <h1><Link to={"/pages/Girlsedu"}>Save the Ocean</Link></h1>
      </Row>
      <Row className="mx-auto text-center py-3">
        <Col md={{ span: 8, offset: 2 }}>
          <p>
            Save the Ocean is a non-profit organization in Brazil that actively
            works with cleaning the sea from plastic and other type of
            polluters. The organization has been active since 2012, and consists
            of 200 activists that work on voluntary basis in their local
            companies.
          </p>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        <Col className="p-3 col-4">
            <Button style={BtnStyle}><Link to={"/pages/educationForAll"} className="text-white routing">SUBSCRIBE TO THIS PROJECT</Link></Button>
        </Col>
        <Col className="p-3 col-4">
            <Button style={BtnStyle}><Link to={"/pages/educationforall"} className="text-white routing"> DONATE WITHOUT SUBSCRIBING</Link></Button>
        </Col>
      </Row>
    </Container>
  ); // Buttons is not flex/fluid - needs to be
};

export default NpoDescription;

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  width: 300,
  height: 61,
};
