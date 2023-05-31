import donate from "./donate.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import vipps from "../../images/vipps.png"
import visa from "../../images/visa.png"
import Girls from "../../images/NpoPages/GirlsEdu.png"

function Donate () {
  return(
    <Container>
      <h2 className="text-center">Donate to Girls Edu</h2>
      <Container id="box">
        <div className="row">
          <div className="col">
        <h3>About</h3>
            <p>
            Girls Edu. is an educational program for girls in Afghanistan. The
              organization has been working with girls between the ages of 5-18,
              where the main focus is to give the students basic knowledge that
              can provide them with future carrier oppurtunities. So far has
              Girls Edu. graduated 750 girls. We employ 43 amazing teachers in
              our family. We aspire to do more and we need you to take part in
              our vision!
            </p>
            </div>
            <div className="col-3">
            <img src={Girls}></img>
            </div>
        </div>
        <div className="form-group">
        <p>Enter the sum you would like to donate</p>
        <input type="number"></input>
            <Row>
            <div className="elementInCheckBox">
              <input type="checkbox" className="form-check-input"></input>
              <p>Monthly</p>
            </div>
            <div className="elementInCheckBox">
              <input type="checkbox" className="form-check-input"></input>
              <p>Annualy</p>
            </div>
            <div className="elementInCheckBox">
              <input type="checkbox" className="form-check-input"></input>
              <p>Every Christmas</p>
            </div>
            </Row>
            <div className="newsLetter">
            <input type="checkbox" className="form-check-input"></input>
            <p>Receive insight, reports and analyses of the project</p>
          </div>
          </div>
          <Row>
          <div className="col-9"></div>
          <div className="col">
          <p>Checkout with:</p>
          <div className="flexBox">
            <img src={vipps} alt="vipps" id="vipps"></img>
            <img src={visa} alt="visa" id="visa"></img>
          </div>
          <button className="btn btn-primary" id="btn">
            <Link
              to={"/ThankyouPage/GirlsEdu"}
              className="text-white routing"
            >
              START SUBSCRIBTION
            </Link>
          </button>
        </div>
        </Row>    
      </Container>
    </Container>
  )
}

export default Donate;
