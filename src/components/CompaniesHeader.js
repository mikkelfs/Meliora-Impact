import { Container, Row, Col } from "react-bootstrap";
import ShortLine from "./ShortLine";

function Header () {
    return (
    <Container className="mt-5">
        <Row>
            <Col>
                <h1 style={titleStyle} className="text-center">Companies</h1>
            </Col>
            <Row>
                <Col className="text-center" style={shortLine}>
                    <ShortLine/>
                </Col>
            </Row>
            <Col className="p-5">
                <p style={{fontSize: 24}}>
                    Companies in partnership Meliora Impact are global companies with a great vision for the future and part of Purpose Movement. 
                </p>
            </Col>
        </Row>
    </Container>
    )
}
export default Header

const titleStyle = {
    fontWeight: 700,
    fontSize: 36
}

const shortLine = {
    marginLeft: 20
}