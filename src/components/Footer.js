import { Form, Button, Row, Col } from "react-bootstrap";
import "./HeaderAndFooter.css";
import face from "../../src/images/face.png";
import insta from "../../src/images/insta.png";
import linkedin from "../../src/images/linkedin.png";
import twitter from "../../src/images/twitter.png";

function Footer() {
  return (
    <footer style={{ overflowX: "hidden" }} className="py-5" id="footer">
      <div id="flex">
        <Row style={{ width: 340 }} className="pt-3 px-3">
          <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
            <p>Contact Us</p>
          </Col>
          <Col xs={12} md={12} lg={2} xl={2} xxl={2}>
            <p>FAQ</p>
          </Col>
          <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
            <p>About Us</p>
          </Col>
        </Row>
        <div id="subscribe-section">
          <Row className="px-3">
            <Col className="p-1 mt-2">
              <Form.Control
                style={inputStyle}
                type="text"
                placeholder="E-mail"
                className="text-center"
              />
            </Col>
            <Col className="p-1 mt-2">
              <Button style={btnStyle} className="p-1" id="btn-subscribe">
                Subscribe
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="px-3 mt-3 text-end" id="socialMedia">
          <Col className="mb-2" xs={12} md={6} lg={3} xl={2}>
            <img
              src={linkedin}
              className="socialPic"
              id="linkedinPic"
              alt=" linkedin"
            ></img>
          </Col>
          <Col className="mb-2" xs={12} md={6} lg={3} xl={2}>
            <img
              src={twitter}
              className="socialPic"
              id="twitterPic"
              alt=" twitter"
            ></img>
          </Col>
          <Col className="mb-2" xs={12} md={6} lg={3} xl={2}>
            <img
              src={face}
              className="socialPic"
              id="facePic"
              alt="facebook"
            ></img>
          </Col>
          <Col className="mb-2" xs={12} md={6} lg={3} xl={2}>
            <img
              src={insta}
              className="socialPic"
              id="instaPic"
              alt=" instagram"
            ></img>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;

const inputStyle = {
  border: "none",
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  height: 35,
  minWidth: 190,
  maxWidth: 250,
  padding: 15,
};

const btnStyle = {
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  height: 35,
  width: 160,
  borderRadius: 10,
  color: "#484747",
  backgroundColor: "white",
  border: "none",
};
