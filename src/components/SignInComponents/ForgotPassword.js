
import {Container, Row, Form, Button, Col} from "react-bootstrap";
import Popup from "./Popup";
import { useState} from "react";


function ForgotPassword() {
    const [buttonPopup, setButtonPopup] = useState(false)


    return (
        <Container className="text-center" style={{height: "75vh"}}>
          <Row>
            <Col>
                <h1 style={passwordStyle}>Forgot your password ?</h1>
            </Col>
            <Row>
              <Col>
                <h1 style={passwordStyle2}>Type in your mobile or e-mail address to reset your password:</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Form>
                  <Form.Group controlId="formEmail" >
                  <Form.Control className="text-center" classtype="email" placeholder="E-mail or mobile number" style={inputField}></Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button style={passwordButton} onClick={() => setButtonPopup(true)}>Reset password</Button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>Please check your e-mail or mobile to create a new password.</h3>
                </Popup>
              </Col>
            </Row>
          </Row>
        </Container>

    )
}

export default ForgotPassword;

const passwordStyle = {
    color: "#000000",
    fontSize: 45

}
const passwordStyle2 = {
    color: "#000000",
    marginTop: 50,
    fontWeight: 400,
    fontStyle: 'normal'
}

const inputField = {
    width: 481,
    height: 65,
    marginTop: 20,
    borderRadius: 10,
    fontWeight: 400,
    border: '1px solid #000000',
    fontSize: 24
  }

const passwordButton = {
    height: 65,
    width: 225,
    marginTop: 20,
    backgroundColor: "#0D2E6E",
    fontSize: 24,
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    border: 'none'
}