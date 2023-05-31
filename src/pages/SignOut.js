import {Container, Row, Col} from "react-bootstrap";
import smile1 from "../images/smile1.png";
import smile2 from "../images/smile2.png";
import "../components/SignOut/SignOut.css"


const SignOut = () => {
    return (
        <Container className="container-fluid pb-5" style={{height: "75vh"}}>
            <Row className="mx-auto w-100 text-center">
                <Col>
                    <Row>
                        <h1 style={signedOutStyle}>You are now signed out !</h1>
                    </Row>
                    <Row>
                        <p style={comeBackStyle}>Come back soon.</p>
                    </Row>
                    <Row className="mx-auto justify-content-center">
                        <img src={smile1} alt="smile1" className="smile1" />
                        <img src={smile2} alt="smile2" className="smile2" />
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default SignOut;

const signedOutStyle = {

    color: "#0D2E6E"
}

const comeBackStyle = {
    marginTop: 50,
    color: "#0D2E6E"
}

