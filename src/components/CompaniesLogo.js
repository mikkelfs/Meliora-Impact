import { Container, Row, Col } from "react-bootstrap"

function CompanyLogo () {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <img src="/images/samsung.png" alt=" "/>
                </Col>
                <Col>
                    <img src="/images/tata.png" alt=" "/>
                </Col>
                <Col>
                    <img src="/images/nokia.png" alt=" "/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="/images/airbnb.png" alt=" "/>
                </Col>
                <Col>
                    <img src="/images/pepsi.png" alt=" "/>
                </Col>
                <Col>
                    <img src="/images/chill-out.png" alt=" "/>
                </Col>
            </Row>
        </Container>

    )
}

export default CompanyLogo