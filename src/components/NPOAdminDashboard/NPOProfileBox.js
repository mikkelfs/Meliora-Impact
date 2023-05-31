import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SaveAralSea from "../../images/save-aral-sea.png";

function NPOProfileBox() {
  return (
    <Container>
      <Row>
        <Card
          style={{
            backgroundColor: "transparent",
            border: "5px solid white",
            maxWidth: 890,
            maxHeight: 960,
            borderRadius: 10,
          }}
        >
          <Row>
            <Col>
              <Card.Body className="p-5">
                <Card.Title style={titleStyle}>NPO Name</Card.Title>
                <Card.Text style={textStyle}>#SaveAralSea</Card.Text>

                <Card.Title style={titleStyle}>Org. no</Card.Title>
                <Card.Text style={textStyle}>123456789098765</Card.Text>

                <Card.Title style={titleStyle}>Contact Information</Card.Title>
                <Card.Text style={textStyle}>
                  <strong>email: </strong>
                  info@savearalsea.com <br />
                  <strong>mobile: </strong>
                  912 38 949 <br />
                  <strong>adress: </strong>
                  Appletree Avenue 15, <br />
                  29201 Tashkent, Uzbekistan
                </Card.Text>

                <Card.Title style={titleStyle}>Subscription type</Card.Title>
                <Card.Text style={textStyle}>Normal</Card.Text>

                <Card.Title style={titleStyle}>Contact Person</Card.Title>
                <Card.Text style={textStyle}>
                  Anna Matveeva <br />
                  CEO
                </Card.Text>
                <div className="mt-5 mb-5">
                  <Link
                    to={"/NPOProfileInfoCard"}
                    className="text-white routing"
                  >
                    <Button
                      style={{
                        backgroundColor: "#0D2E6E",
                        width: 216,
                        border: "none",
                      }}
                    >
                      Edit Info
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Col>
            <Col
              className="d-sm-none d-md-none d-lg-block"
              style={profilePicStyle}
            >
              <img src={SaveAralSea} alt=" " />
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}

export default NPOProfileBox;

const cardStyle = {
  backgroundColor: "transparent",
  borderColor: "white",
  border: "5px solid white",
  borderRadius: 10,
  width: 890,
};

const profilePicStyle = {
  height: 260,
  maxWidth: 280,
  margin: 50,
  borderColor: "1px solid black",
};

const titleStyle = {
  color: " #0D2E6E",
  fontSize: 24,
  fontWeight: 700,
};

const textStyle = {
  fontSize: 24,
};
