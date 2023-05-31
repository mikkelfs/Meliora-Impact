import { Container, Row, Col } from "react-bootstrap"

function JoinUsBtn () {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={titleStyle}>
                        Be the change you want to see, by joining Meliora Impact. Find that project which reflects your company’s values and vision. 
                    </h2>
                </Col>
            </Row>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <div className="text-center" style={btnStyle}>
                            <h3>JOIN US NOW</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default JoinUsBtn

const titleStyle = {
    fontWeight: 700,
    fontSize: 36
}

const btnStyle = {
    fontSize: 24,
    color: 'white',
    backgroundColor: ' #0D2E6E',
    padding: 20,
    borderRadius: 10,
    width: 510,
    marginTop: 70,
    marginBottom: 200
}