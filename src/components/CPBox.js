import { Container, Row, Col, Card, Button } from "react-bootstrap";

function CPBox() {
  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Card style={cardStyle}>
            <Row>
              <Col>
                <Card.Body className="p-5">
                  <Card.Title style={titleStyle}>Company Name</Card.Title>
                  <Card.Text style={textStyle}>Chillout AS</Card.Text>

                  <Card.Title style={titleStyle}>Org. no</Card.Title>
                  <Card.Text style={textStyle}>123456789098765</Card.Text>

                  <Card.Title style={titleStyle}>
                    Contact Information
                  </Card.Title>
                  <Card.Text style={textStyle}>
                    <strong>email: </strong>
                    info@chillout.no <br />
                    <strong>mobile: </strong>
                    912 38 949 <br />
                    <strong>adress: </strong>
                    Markveien 15, 0192 <br />
                    Oslo Norway
                  </Card.Text>

                  <Card.Title style={titleStyle}>Subscription type</Card.Title>
                  <Card.Text style={textStyle}>Medium</Card.Text>

                  <Card.Title style={titleStyle}>Contact Person</Card.Title>
                  <Card.Text style={textStyle}>
                    Laura Hansen <br />
                    HR
                  </Card.Text>
                  <div className="mt-5">
                    <Button
                      style={{
                        backgroundColor: "#0D2E6E",
                        width: 216,
                        border: "none",
                      }}
                    >
                      Edit Info
                    </Button>
                  </div>
                </Card.Body>
              </Col>
              <Col style={profilePicStyle}>
                <img src="/images/chillout-logo.png" alt=" " />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CPBox;

const cardStyle = {
  backgroundColor: "transparent",
  borderColor: "white",
  border: "5px solid white",
  borderRadius: 10,
  width: 890,
};

const profilePicStyle = {
  height: 210,
  maxWidth: 300,
  marginTop: 50,
};

const titleStyle = {
  color: " #0D2E6E",
  fontSize: 24,
  fontWeight: 700,
};

const textStyle = {
  fontSize: 24,
};
