import { Container, Row, Col, Button } from "react-bootstrap"

function JoinUsBtn () {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
              <h2 style={{fontWeight: 700, fontSize: 36, color: '#0D2E6E', font: 'Roboto', maxWidth: 1000}}>
                Be the change you want to see, by joining Meliora Impact. Find that project which reflects your company’s values and vision. 
              </h2>
            </Row>
            <Col className="d-flex justify-content-center">
                <Row>
                    <Button className="text-center" style={btnStyle}>
                      JOIN US NOW
                    </Button>
                </Row>
            </Col>
        </Container>
    )
}
export default JoinUsBtn

const btnStyle = {
    fontSize: 24,
    font: 'Roboto',
    fontStyle: 'normal',
    color: 'white',
    backgroundColor: ' #0D2E6E',
    borderRadius: 10,
    width: 500,
    height: 80,
    marginTop: 70,
    marginBottom: 200,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    border: 'none'
}