import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import saveAralSea from "../../images/save-aral-sea.png";
import GirlsEdu from "../../images/Girls-Edu.png";

function CPDonationsBox() {
  return (
    <Container>
      <h1 className="text-center pb-3">All my donations</h1>
      <Row className="py-3">
        <Card className="p-3" style={innerCardStyle}>
          <Row className="text-center pt-3">
            <Col className="col-xs-3 col-3">
              <h2 className="text-center text-black" style={title}>
                #SaveAralSea
              </h2>
              <br />
              <img className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" style={Icons} src={saveAralSea} alt=" " />
            </Col>
            <Col className="align-self-center text-start col-xs-5 col-5 pt-5">
              <p style={{ fontSize: 'calc(0.7em + 1vw)' }} className="d-grid gap-2">
                <div>
                  <strong>
                    Total donations sum:
                    <span className="fw-light"> $ 32,000</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Status: <span className="fw-light"> Active</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Donation sum: <span className="fw-light"> $ 100</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Deduction: <span className="fw-light"> Monthly</span>
                  </strong>
                </div>
              </p>
            </Col>
            <Col className="pt-5 pe-5 mt-2 col-xs-4 col-4">
              <Row className="mb-3 d-flex justify-content-center ">
                <Button style={btnStyleBlue}>
                  <Link to={"/CPAProjects"} className="text-white routing">
                    Show Project
                  </Link>
                </Button>
              </Row>
              <Row className="mb-3 d-flex justify-content-center ">
                <Button style={btnStyleBlue}>Manage Subscription</Button>
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row className="py-3">
        <Card className="p-3" style={innerCardStyle}>
          <Row className="text-center pt-3">
            <Col className="col-xs-2 col-3">
              <h2 className="text-center text-black" style={title}>
                Girls Edu.
              </h2>
              <br />
              <img className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" style={Icons} src={GirlsEdu} alt=" " />
            </Col>
            <Col className="align-self-center text-start col-xs-5 col-5 pt-5">
              <p style={{ fontSize: 'calc(0.7em + 1vw)' }} className="d-grid gap-2">
                <div>
                  <strong>
                    Total donations sum:
                    <span className="fw-light"> $ 2,000</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Status: <span className="fw-light"> Ongoing</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Donation sum: <span className="fw-light"> $ 50</span>
                  </strong>
                </div>
                <div>
                  <strong>
                    Deduction: <span className="fw-light"> Monthly</span>
                  </strong>
                </div>
              </p>
            </Col>
            <Col className="pt-5 pe-5 mt-2 col-xs-4 col-4">
              <Row className="mb-3 d-flex justify-content-center ">
                <Button style={btnStyleBlue}>Show Project</Button>
              </Row>
              <Row className="mb-3 d-flex justify-content-center ">
                <Button style={btnStyleBlue}>Manage Subscription</Button>
              </Row>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
export default CPDonationsBox;

const innerCardStyle = {
  borderRadius: 10,
};

const btnStyleBlue = {
  border: "none",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  minWidth: 170,
  maxWidth: 260,
  backgroundColor: "#0D2E6E",
  fontWeight: 700,
  fontSize: 'calc(0.2em + 1vw)'
}
const Icons = {
  width: 130,
  height: 122,
  borderRadius: 10,
};

const title = {
  fontSize: 'calc(0.6em + 1vw)',
  textDecoration: "underline",
};
