import { Container, Row, Col } from 'react-bootstrap'

function Header () {

  return (
    <Container>
        <Row>
            <Col className="justify-content-center" >
                <h1 className='text-center' style={{fontSize: 36, fontWeight: 700, fontFamily:'helvetica'}}>About Us</h1>
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
    marginTop: 40,
}