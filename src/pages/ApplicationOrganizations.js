import {
  Container,
  Row,
  Col,
  Form,
  Button,
  title,
  Card,
} from "react-bootstrap";

const ApplicationOrganizations = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2
            style={{
              color: "white",
              padding: 50,
              marginBottom: 30,
            }}
          >
            Application for non-profit organizations
          </h2>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <Card
            style={{
              border: "1px solid white",
              marginBottom: 20,
              marginTop: -50,
              width: 170,
              height: 1,
            }}
          />
        </Col>
      </Row>
      <p className="mb-5" style={{ fontSize: 24, fontFamily: "helvetica" }}>
        If your non-profit organization have a great vision but needs funding,
        the platform of Meliora Impact is a good place to start your journey. We
        connect companies with non-profits based on the sustainability of the
        project and the importance it carries for the society. As an
        organization , we expect you to be transparent, organized and have the
        capacity to report results frequently to your donors.
      </p>

      <Form>
        <Row className="mb-3 px-5">
          <Form.Group as={Col} controlId="ContactPerson">
            <Form.Label>Name of organization</Form.Label>
            <Form.Control
              style={{ borderRadius: 10, height: 60 }}
              type="text"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Organization No. </Form.Label>
            <Form.Control
              style={{ borderRadius: 10, height: 60 }}
              type="text"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3 px-5">
          <Form.Group as={Col} controlId="ContactPerson">
            <Form.Label>Country</Form.Label>
            <Form.Control
              style={{ borderRadius: 10, height: 60 }}
              type="text"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              style={{ borderRadius: 10, height: 60 }}
              type="text"
            />
          </Form.Group>
        </Row>

        <Row className="justify-content-end mb-3">
          <Col className="mr-2" xxl={2} xl={2} lg={2} md={3} sm={4}>
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                border: "none",
                width: 150,
                height: 45,
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Select file
            </Button>
          </Col>
          <Col className="mr-2" xxl={2} xl={3} lg={3} md={4} sm={6}>
            <Button
              style={{
                backgroundColor: "#0D2E6E",
                border: "none",
                width: 150,
                height: 45,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Upload
            </Button>
          </Col>
        </Row>

        <Row className="mb-3 px-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Presentation:</Form.Label>

            <Form.Control
              style={{ borderRadius: 10, padding: 40 }}
              as="textarea"
              rows={3}
              placeholder="What is the vision of the organization ? Include a five-year-plan, as well as the estimated costs for the different projects. 

Upload some kind of  documentation that could show the NPO in action."
            />
          </Form.Group>
        </Row>
      </Form>

      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            className="d-flex justify-content-center align-items-center"
            href={"/Page5"}
            style={{
              width: "284px",
              height: 70,
              backgroundColor: "#0D2E6E",
              marginTop: 60,
              border: "none",
              borderRadius: 10,
              fontSize: 24,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Send application
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationOrganizations;
