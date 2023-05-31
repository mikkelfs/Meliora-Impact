import { Col, Container, Row } from "react-bootstrap";
import NOKIA from "../../images/Npo/NOKIA.png";
import SAMSUNG from "../../images/Npo/SAMSUNG.png";

const NpoActive = () => {
  return (
    <Container className="mx-auto p-4">
      <Row className="ms-5 p-3">
        <Col md={{ span: 9, offset: 1 }}>
          <h1 style={ActiveTitle}>Companies active in this non-profit: </h1>
        </Col>
      </Row>
      <Row className="mx-auto p-3">
        <Col md={{ span: 4, offset: 2 }} className="p-2">
          <img src={SAMSUNG} alt="samsung" />
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="p-2">
          <img src={NOKIA} alt="nokia" />
        </Col>
      </Row>
    </Container>
  );
};

export default NpoActive;

const ActiveTitle = {
  color: "#0D2E6E",
};
