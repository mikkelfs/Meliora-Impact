import { Container, Row, Col, Card, Button } from "react-bootstrap";
import chilloutLogo from "../../images/chillout-logo.png";
import generous from "../../images/generous.png";

function NPOMyDonorsBox() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-3" style={cardStyle}>
            <Card style={innerCardStyle}>
              <Row className="p-3">
                <Col className="mx-2" style={{ maxWidth: 220 }}>
                  <h2 style={titleStyle}>Chillout AS</h2>
                  <img
                    src={chilloutLogo}
                    alt=" "
                    className="mt-2"
                    style={{ maxWidth: 190, maxHeight: 190 }}
                  />
                </Col>
                <Col className="align-self-center">
                  <p style={bodyTextStyle}>
                    <span style={{ color: "#1EB185" }}>
                      Total donations sum:{" "}
                    </span>
                    <strong style={{ color: "#0D2E6E", fontSize: 18 }}>
                      $ 32,000
                    </strong>
                    <br />
                    <span style={{ color: "#1EB185", fontSize: 18 }}>
                      Donation frequency:{" "}
                    </span>
                    <i
                      style={{
                        color: "#0D2E6E",
                        fontSize: 18,
                        fontWeight: 400,
                      }}
                    >
                      Monthly
                    </i>
                    <br />
                    <span style={{ color: "#1EB185", fontSize: 18 }}>
                      Donation sum:{" "}
                    </span>
                    <span
                      style={{
                        color: "#0D2E6E",
                        fontSize: 18,
                        fontWeight: 400,
                      }}
                    >
                      $ 100 per month
                    </span>
                    <br />
                    <span style={{ color: "#1EB185", fontSize: 18 }}>
                      Donor since:{" "}
                    </span>
                    <span
                      style={{
                        color: "#0D2E6E",
                        fontSize: 18,
                        fontWeight: 400,
                      }}
                    >
                      12.03.2020
                    </span>
                  </p>
                </Col>
                <Col>
                  <div className="text-center mb-3 mt-3">
                    <img
                      src={generous}
                      alt=" "
                      style={{ width: 80, height: 64 }}
                    />
                  </div>
                  <h3
                    className="text-center mb-3"
                    style={{ fontSize: 18, fontWeight: 400 }}
                  >
                    Most generous NPO
                  </h3>

                  <Row className="mb-3 d-flex justify-content-center">
                    <Button style={btnStyleGreen}>Share Status Report</Button>
                  </Row>
                  <Row className="mb-3 d-flex justify-content-center">
                    <Button style={btnStyleBlue}>Contact Company</Button>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default NPOMyDonorsBox;
const cardStyle = {
  backgroundColor: "transparent",
  border: "5px solid white",
  height: 900,
  maxWidth: 900,
  borderRadius: 10,
};

const innerCardStyle = {
  border: "1px solid black",
  borderRadius: 10,
};

const btnStyleBlue = {
  border: "none",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  width: 220,
  height: 47,
  backgroundColor: "#0D2E6E",
  fontWeight: 700,
  fontSize: 18,
};

const btnStyleGreen = {
  border: "none",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  width: 220,
  height: 47,
  backgroundColor: "#59B48E",
  fontWeight: 700,
  fontSize: 18,
};

const titleStyle = {
  fontSize: 24,
  fontWeight: 700,
  marginTop: 10,
  color: "#0D2E6E",
};

const bodyTextStyle = {
  fontSize: 18,
  fontWeight: 500,
};
