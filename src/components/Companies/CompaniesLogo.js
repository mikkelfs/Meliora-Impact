import { Container, Row, Col } from "react-bootstrap";
import samsung from "../../images/samsung.png";
import tata from "../../images/tata1.png";
import nokia from "../../images/nokia.png";
import airbnb from "../../images/airbnb.png";
import pepsi from "../../images/pepsi.png";
import chillout from "../../images/chill-out.png";

function CompanyLogo() {
  return (
    <Container className="text-center">
      <Row>
        <Col className="my-4">
          <img src={samsung} alt=" " />
        </Col>
        <Col className="my-4">
          <img src={tata} alt=" " />
        </Col>
        <Col className="my-4">
          <img src={nokia} alt=" " />
        </Col>
      </Row>
      <Row>
        <Col className="my-5" sm={12} md={6} lg={4} xl={4} xxl={4}>
          <img src={airbnb} alt=" " />
        </Col>
        <Col className="my-5" sm={12} md={6} lg={4} xl={4} xxl={4}>
          <img src={pepsi} alt=" " />
        </Col>
        <Col className="my-5" sm={12} md={12} lg={4} xl={4} xxl={4}>
          <img src={chillout} alt=" " />
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyLogo;
