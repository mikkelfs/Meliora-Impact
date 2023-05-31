import { Container, Row, Col } from 'react-bootstrap'

function Header () {

  return (
    <Container>
        <Row>
            <Col className="text-center mt-5" >
                <h1 style={{fontSize: 48}}>About Us</h1>
                <p style={textStyle} >
                    Meliora Impact is a Norwegian female-founded startup changing corporate giving and the way companies and nonprofits connect.
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default Header

const textStyle = {
    color: '#0D2E6E',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 40
}