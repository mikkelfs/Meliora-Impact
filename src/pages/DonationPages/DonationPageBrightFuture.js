import donate from "./donate.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import vipps from "../../images/vipps.png"
import visa from "../../images/visa.png"
import future from "../../images/NpoPages/BrightFuture.png"

function DonationPageBrightFuture () {
  return(
    <Container>
      <h2 className="text-center">Donate to Bright future</h2>
      <Col id="box">
        <Row>
          <Col>
            <h3>About</h3>
            <p>
            Bright Future is a non-profit organization which aims to provide
              education for refugee children all over the world. Refugees are
              people who have lost their homes and the usual structure of life
              is disturbed as a result. As the situation can be prolonged over
              many years, even decades - during these years children lose
              valuable time of education. In Bright Future we want to close the
              education gap for refugee children.
            </p>
            </Col>
            <Col className="col-3">
            <img src={future}></img>
            </Col>
        </Row>
        <Form>
        <Row>
          <Col>
            <p>Enter the sum you would like to donate</p>
          </Col>
          <Col>
            <input type="number"/>
          </Col>
        </Row>
                <label style={{fontSize: 18, padding: 15}}>Monthly</label>
                  <input type="checkbox" className="form-check-input"/>
                <label style={{fontSize: 18, padding: 15}}>Annualy</label>
                <input type="checkbox" className="form-check-input"/>
                <label style={{fontSize: 18, padding: 15, display: 'inline-block'}}>Every Christmas</label>
                <input type="checkbox" className="form-check-input"/>
            <Row>

            <Col className="newsLetter">
              <input type="checkbox" className="form-check-input"/>
              <label>Receive insight, reports and analyses of the project</label>
            </Col>
            </Row>
          </Form>
          <Row>
          <div className="col-9"></div>
          <div className="col">
          <p>Checkout with:</p>
          <div className="flexBox">
            <img src={vipps} alt="vipps" id="vipps"></img>
            <img src={visa} alt="visa" id="visa"></img>
          </div>
          <Button className="btn btn-primary" id="btn">
            <Link
              to={"/ThankyouPage/BrightFuture"}
              className="text-white routing"
            >
              START SUBSCRIBTION
            </Link>
          </Button>
        </div>
        </Row>    
      </Col>
    </Container>
  )
}

export default DonationPageBrightFuture;
