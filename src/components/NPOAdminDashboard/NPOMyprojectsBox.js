import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CircleFill } from "react-bootstrap-icons";

function NPOMyProjectsBox() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={cardStyle} className="p-4">
            <Card.Body>
              <Row>
                <Col className="d-flex justify-content-end">
                  <Link
                    to={"/NPOAddProjectCard"}
                    className="text-white routing"
                  >
                    <Button style={btnStyle}>Add new project</Button>
                  </Link>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <CircleFill
                    style={{ border: "1px solid white", borderRadius: 100 }}
                    size={25}
                    color="#1EB185"
                  />
                  <label className="mx-3" style={{ fontSize: 18 }}>
                    Active projects
                  </label>
                </Col>
              </Row>
              <Link to={"/NPOMyProject21"} className="text-white routing">
                <Row className="p-2">
                  <Card style={activeStyle}>
                    <Card.Body className="text-left" style={bodyStyle}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/NPOMyProject21"}
                      >
                        <h1 style={titleStyle}>Project No. 21</h1>
                      </Link>
                      <p style={bodyTextStyle}>
                        <u>Duration: September 2020 - March 2023</u>
                      </p>
                    </Card.Body>
                  </Card>
                </Row>
              </Link>
              <Row>
                <h3
                  className="mt-5"
                  style={{ color: "#0D2E6E", fontSize: 24, fontWeight: 400 }}
                >
                  Expired Projects:
                </h3>
              </Row>
              <Row className="p-2">
                <Card style={unactiveStyle}>
                  <Card.Body style={bodyStyle}>
                    <Card.Title style={titleStyle}>Project No. 20</Card.Title>
                    <Card.Text style={bodyTextStyle}>
                      <u>Duration: June 2020 - March 2020</u>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="p-2">
                <Card style={unactiveStyle}>
                  <Card.Body style={bodyStyle}>
                    <Card.Title style={titleStyle}>Project No. 19</Card.Title>
                    <Card.Text style={bodyTextStyle}>
                      <u>Duration: April 2018 - March 2019</u>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="p-2 mb-5">
                <Card style={unactiveStyle}>
                  <Card.Body style={bodyStyle}>
                    <Card.Title style={titleStyle}>Project No. 18</Card.Title>
                    <Card.Text style={bodyTextStyle}>
                      <u>Duration: September 2018 - March 2020</u>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default NPOMyProjectsBox;
const cardStyle = {
  backgroundColor: "transparent",
  border: "5px solid white",
  maxHeight: 1045,
  maxWidth: 890,
  borderRadius: 10,
};

const bodyStyle = {
  height: 145,
};

const btnStyle = {
  backgroundColor: "#59B48E",
  border: "1px solid white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  maxWidth: 226,
  maxHeight: 65,
  fontSize: 20,
  marginTop: 20,
  marginBottom: 20,

};

const activeStyle = {
  backgroundColor: "#0D2E6E",
  color: "white",
  display: "flex",
  borderRadius: 10,
  borderLeft: "#59B48E 50px solid",
  borderTop: "0px",
  borderBottom: "0px"
};

const unactiveStyle = {
  color: "#0D2E6E",
  fontSize: 24,
  border: "none",
  display: "flex",
  borderRadius: 10,
};

const titleStyle = {
  fontSize: 'calc(0.4em + 1vw)',
  fontWeight: 400,
  marginTop: 10,
};

const bodyTextStyle = {
  fontSize: 'calc(0.3em + 1vw)',
  fontWeight: 400,
};
