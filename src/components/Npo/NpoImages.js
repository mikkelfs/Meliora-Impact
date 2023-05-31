import { Card, Col, Container, Row } from "react-bootstrap";
import saveto1 from "../../images/Npo/saveto1.png";
import saveto2 from "../../images/Npo/saveto2.png";
import saveto3 from "../../images/Npo/saveto3.png";
import saveto4 from "../../images/Npo/saveto4.png";

const NpoImages = () => {
  return (
    <Container className="p-0">
      <Card style={Box} className="p-3">
        <Row>
          <Col xs={3}>
            <img src={saveto1} alt="sto1" />
          </Col>
          <Col xs={3}>
            <img src={saveto2} alt="sto2" />
          </Col>
          <Col xs={3}>
            <img src={saveto3} alt="sto3" />
          </Col>
          <Col xs={3}>
            <img src={saveto4} alt="sto4" />
          </Col>
        </Row>
      </Card>
    </Container>
  ); // [] images are not centered. implement this later
};
export default NpoImages;

const Box = {
  backgroundColor: "white",
};
