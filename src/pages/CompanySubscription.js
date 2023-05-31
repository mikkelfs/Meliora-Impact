import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Text,
  Grid,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CompanySubscription = () => {
  return (
    <Container>
      <Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <h2
              style={{
                color: "white",
                padding: 50,
                marginBottom: 30,
                fontFamily: "helvetica",
                fontWeight: 700,
                fontSize: 36,
              }}
            >
              Subscribe to Meliora Impact Platform
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
          If your company wishes to become part of Purpose Movement and donate
          to a non-profit organization that reflects your companies values, do
          not hesitate to get in touch with our Meliora Impact team to guide
          your through the process of subscription ! Our team will help you to
          find the non-profit organization that fits just in to your company
          vision.
        </p>

        <Form className="px-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="ContactPerson">
              <Form.Label>Contact Person</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Role</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Organization No.</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Country</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                style={{ borderRadius: 10, height: 50 }}
                type="text"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Message</Form.Label>

              <Form.Control
                style={{ borderRadius: 10, padding: 30 }}
                as="textarea"
                rows={3}
                placeholder="Please use this section to describe what kind of projects your company is interested in, and the aproximate budget you are planning to spend on donations annyally or monthly."
              />
            </Form.Group>
          </Row>
        </Form>

        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              className="d-flex justify-content-center align-items-center"
              href={"/NPOThanks"}
              style={{
                height: 70,
                maxWidth: 500,
                minWidth: 300,
                backgroundColor: "#0D2E6E",
                marginTop: 60,
                border: "none",
                borderRadius: 10,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: 24,
              }}
            >
              GET STARTED
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default CompanySubscription;
