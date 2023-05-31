import savetheocean from "../../images/Npo/savetheocean.png";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NpoLogo = () => {
  return (
    <Container style={Box} className="p-3">
      <Row style={Box} className="p-3">
        <Col className="text-center">
          <img src={savetheocean} alt="stologo" />
        </Col>
      </Row>
    </Container>
  );
};

export default NpoLogo;

const Box = {
  backgroundColor: "white",
};

//Logo.defaultProps = {
//  src={},
//}
