import { Container, Row, Col, Card } from "react-bootstrap";

function AUBoxes() {
  return (
    <Container>
      <Row className="justify-content-center">
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-center">
              <Card style={Box}>
                <Card.Body className="p-3">
                    <p style={BoxText}>
                      A research made by the Red Cross has concluded that many
                      companies are often reluctant to actively participate
                      funding in non-profits due to lack of information and
                      time-consuming research that comes with the job.
                    </p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
              <Card style={Box}>
                <Card.Body className="p-3">
                  <Card.Text>
                    <p style={BoxText}>
                      The research has shown us that NPOs often struggle to
                      finalize a project due to lack of funding. In the cases
                      where companies have actively been involved through
                      funding and follow-ups, the effeciency of the NPOs has
                      increased by 50%.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Row>
      <Row>
        <Col>
          <p style={BodyText}>
            Based on these factors, our crew in Meliora Impact have realized
            that there is no existing platform between NPOs with great ideas and
            companies who wish to create purposeful impact on the society.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AUBoxes;

const Box = {
  backgroundColor: "#0D2E6E",
  color: "white",
  borderRadius: 10,
  fontSize: 20,
  padding: 5,
  marginTop: 30,
  overflowX: 'auto',
  overflowY: 'hidden'
};

const BodyText = {
  marginTop: 30,
  marginBottom: 30,
  color: "black",
}
const BoxText = {
  height: 190,
  padding: 2,
};
