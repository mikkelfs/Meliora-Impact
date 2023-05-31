import { Container, Row, Col, Card } from "react-bootstrap";
import arrow from "../../images/arrow.png";
import arrowleft from "../../images/arrow-left.png";
import vector from "../../images/vector-aboutus.png";
import logo from "../../images/logo-ao.png";
import vectordown from "../../images/vector-down.png";

function HowDoesItWork() {
  return (
    <Container className="pt-2">
      <Container className="d-sm-block d-md-block d-lg-none">
        <Row>
          <h2 style={titleStyle}>How does it work?</h2>
          <Card className="p-4" style={mobileBox}>
            <Col>
              <h1 className="mb-3" style={titleMobileStyle}>
                COMPANY
              </h1>
            </Col>
            <Col>
              <p className="text-start">
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                Direct funds to a cause <br />
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                Social awareness
                <br />
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                Preformance and accountability <br />
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                Engagement from bussines owners
              </p>
            </Col>

            <Col className="text-center mt-5">
              <img className="mb-2" src={logo} alt=" " />
            </Col>
            <Col className="mt-5 text-end mb-3 mx-3">
              <h1 style={titleMobileStyle}>NON-PROFIT</h1>
            </Col>
            <Col>
              <p className="text-end">
                Impact Measurement
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                <br />
                Transparency & Accountability
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                <br />
                Company affialated with charity
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                <br />
                First hand engagment by employees
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                <br />
              </p>
            </Col>
          </Card>
        </Row>
      </Container>
      <Container className="d-none d-sm-none d-md-none d-lg-block d-xl-none">
        <Row>
          <h2 style={titleStyle}>How does it work?</h2>
          <Card
            className="p-5"
            style={{
              backgroundColor: "#0D2E6E",
              color: "white",
              borderRadius: 10,
              height: 500,
              fontSize: 15,
            }}
          >
            <Row>
              <Col lg={4}>
                <h1 className="mb-5" style={{ fontSize: 36 }}>
                  COMPANY
                </h1>
              </Col>
              <Col lg={2}>
                <img style={{ height: 90 }} src={vector} alt=" " />
              </Col>
              <Col lg={6}>
                <p className="text-end">
                  Direct funds to a cause
                  <img className="m-2" style={Arrow} src={arrow} alt=" " />
                  <br />
                  Social awareness
                  <img className="m-2" style={Arrow} src={arrow} alt=" " />
                  <br />
                  Preformance and accountability
                  <img className="m-2" style={Arrow} src={arrow} alt=" " />
                  <br />
                  Engagement from bussines owners
                  <img className="m-2" style={Arrow} src={arrow} alt=" " />
                  <br />
                </p>
              </Col>
            </Row>
            <Col className="text-center">
              <h1 style={{ fontSize: 45 }}>
                MELI
                <img
                  style={{ height: 32, width: 32 }}
                  className="mb-2"
                  src={logo}
                  alt=" "
                />
                RA
              </h1>
            </Col>
            <Row>
              <Col>
                <p className="text-start">
                  <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                  Impact Measurement
                  <br />
                  <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                  Transparency & Accountability
                  <br />
                  <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                  Company affialated with charity
                  <br />
                  <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                  First hand engagment by employees
                  <br />
                </p>
              </Col>
              <Col lg={3}>
                <img style={{ height: 90 }} src={vectordown} alt=" " />
              </Col>
              <Col lg={4} className="">
                <h1 style={{ fontSize: 36 }}>NON-PROFIT</h1>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>

      <Row className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <h2 style={titleStyle}>How does it work?</h2>
        <Card style={Box}>
          <Row className="p-5" style={TopRow}>
            <Col style={companyTitle}>
              <h1>COMPANY</h1>
            </Col>
            <Col style={VectorImgTop}>
              <img style={Vector} src={vector} alt=" " />
            </Col>
            <Col style={TextBoxTop}>
              <p>
                Direct funds to a cause
                <img className="m-2" style={Arrow} src={arrow} alt=" " /> <br />
                Create social awareness outside of the organization
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                <br />
                Preformance and accountability within organization
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                <br />
                Engagement from bussines owners
                <img className="m-2" style={Arrow} src={arrow} alt=" " />
                <br />
              </p>
            </Col>
          </Row>
          <Row style={MiddleRow}>
            <Col className="text-center mx-3">
              <h1>
                MELI
                <img
                  style={{ width: 32, height: 32 }}
                  className="mb-2"
                  src={logo}
                  alt=" "
                />
                RA IMPACT
              </h1>
            </Col>
          </Row>
          <Row>
            <Col style={TextBoxBtm}>
              <p>
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                Impact Measurement <br />
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                Transparency & Accountability <br />
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                Company affialated with charity
                <br />
                <img className="m-2" style={Arrow} src={arrowleft} alt=" " />
                First hand engagment by employees
                <br />
              </p>
            </Col>
            <Col className="text-start" style={VectorImgBtm}>
              <img style={Vector} src={vectordown} alt=" " />
            </Col>
            <Col className="mb-5" style={NonProfitTitle}>
              <h1 className="mt-3">NON-PROFIT</h1>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}

export default HowDoesItWork;
const titleStyle = {
  padding: 20,
  color: "white",
  fontSize: 36,
};

const Box = {
  backgroundColor: "#0D2E6E",
  color: "white",
  maxHeight: 500,
  borderRadius: 10,
};

const TopRow = {
  maxHeight: 200,
};

const MiddleRow = {
  maxHeight: 100,
};

const Vector = {
  width: 118,
  height: 105,
};

const Arrow = {
  width: 17,
  height: 17,
};

const companyTitle = {
  maxWidth: 300,
  fontSize: 36,
};

const TextBoxTop = {
  maxWidth: 500,
  maxHeight: 60,
  marginRight: 10,
  textAlign: "right",
};

const TextBoxBtm = {
  maxWidth: 600,
  textAlign: "left",
  marginLeft: 120,
};

const VectorImgTop = {
  maxWidth: 200,
};

const NonProfitTitle = {
  maxWidth: 300,
  marginTop: 100,
  marginLeft: 70,
  fontSize: 36,
};

const VectorImgBtm = {
  maxWidth: 70,
  marginTop: 50,
};

const titleMobileStyle = {
  fontSize: 25,
};

const mobileBox = {
  backgroundColor: "#0D2E6E",
  color: "white",
  borderRadius: 10,
};
