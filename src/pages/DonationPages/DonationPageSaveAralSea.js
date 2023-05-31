import donate from "./donate.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SaveAralSea from "../../images/NpoPages/SaveAralSea.png"
import vipps from "../../images/vipps.png"
import visa from "../../images/visa.png"

function Donate () {
  return(
    <Container>
      <h2 className="text-center">Donate to #SaveAralSea</h2>
      <Container id="box">
        <div className="row">
          <div className="col">
        <h3>About</h3>
            <p>
            #Save Aral Sea is a local initiative to promote forestation by
                planting local trees in the deserted area of Aral Sea region.
                The consequences of deforestation are touching every aspect of
                life in the region, and in the future it will also accelerate
                the consequences of global warming everywhere. With your
                support, our team will be provided the neccesseary support, to
                work in challenging conditions to promote forestetaton and stop
                the of the man-made ecological catastrophy.
            </p>
            </div>
            <div className="col-3">
            <img src={SaveAralSea}></img>
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
              to={"/ThankyouPage/SaveAralSea"}
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
