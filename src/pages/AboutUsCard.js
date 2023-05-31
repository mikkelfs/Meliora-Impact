import { Container, Row, Col, Card } from "react-bootstrap";
import AboutUsHeader from "../components/aboutUs/AboutUsHeader";
import AUBoxes from "../components/aboutUs/AboutUsInfoBoxes";
import BenefitForComp from "../components/aboutUs/BenefitForComp";
import HowDoesItWork from "../components/aboutUs/HowDoesItWork";
import Creators from "../components/aboutUs/Creators";

function AboutUsCard() {
  return (
    <Container>
      <Row>
        <Col>
          <AboutUsHeader />
          <AUBoxes />
          <Card></Card>
          <BenefitForComp />
          <Card className="mt-5"></Card>
          <HowDoesItWork></HowDoesItWork>
          <Card className="mt-5"></Card>
          <Row>
            <Creators></Creators>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsCard