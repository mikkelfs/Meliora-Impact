import { Container, Row, Col} from "react-bootstrap";
import SignIn from "../components/SignInComponents/SignIn";

function SignInPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <SignIn/>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInPage;