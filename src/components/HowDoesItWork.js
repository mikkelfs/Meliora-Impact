import {Container, Row, Col, Card} from 'react-bootstrap'

function HowDoesItWork () {
  return (
      <Container>
      
      <h2 style={titleStyle}>How does it work?</h2>
            <Card style={Box}>
                <Row className='p-5' style={TopRow}>
                    <Col style={companyTitle}>
                        <h1>COMPANY</h1>
                    </Col>
                    <Col style={VectorImgTop}>
                        <img style={Vector} src='images/vector.png' alt=' '/>
                    </Col>
                    <Col style={TextBoxTop}>
                    <p>

                        Direct funds to a cause 
                            <img className='m-2' style={Arrow} src='images/arrow.png' alt=' '/> <br/>
                        Create social awareness outside of the organization
                            <img className='m-2' style={Arrow} src='images/arrow.png' alt=' '/><br/>
                        Preformance and  accountability within organization
                            <img className='m-2' style={Arrow} src='images/arrow.png' alt=' '/><br/>
                        Engagement from bussines owners
                            <img className='m-2' style={Arrow} src='images/arrow.png' alt=' '/><br/>
                    </p>
                </Col>
            </Row>
            <Row style={MiddleRow}>
                <Col className='text-center'>
                    <h1>MELI<img className='mb-2' src='images/logo.png' alt=' ' />RA IMPACT</h1>
                </Col>
            </Row>
            <Row className='p-5'>
                <Col style={TextBoxBtm}>
                    <p>
                        <img className='m-2' style={Arrow} src='images/arrow-left.png' alt=' '/>
                        Impact Measurement  <br/>

                        <img className='m-2' style={Arrow} src='images/arrow-left.png' alt=' '/>
                        Transparency & Accountability <br/>

                        <img className='m-2' style={Arrow} src='images/arrow-left.png' alt=' '/>
                        Company affialated with charity<br/>

                        <img className='m-2' style={Arrow} src='images/arrow-left.png' alt=' '/>
                        First hand engagment by employees<br/>
                    </p>
                </Col>
                <Col style={VectorImgBtm}>
                    <img style={Vector} src='images/vector-down.png' alt=' '/>
                </Col>
                <Col style={NonProfitTitle}>
                    <h1>NON-PROFIT</h1>
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

export default HowDoesItWork
const titleStyle = {
    padding: 20,
    color: 'white',
    fontSize: 36
}

const Box = {
    backgroundColor: '#0D2E6E',
    color: 'white',
    maxHeight: 500,
    borderRadius: 10

}

const TopRow = {
    maxHeight: 200
}

const MiddleRow = {
    maxHeight: 100,
}

const Vector = {
    width: 118,
    height: 105
}

const Arrow = {
    width: 17,
    height: 17
}

const companyTitle = {
    maxWidth: 300,
    fontSize: 36 
}


const TextBoxTop = {
    position: 'relative',
    maxWidth: 500, 
    maxHeight: 60,
    marginRight: 10,
    textAlign: 'right'

}

const TextBoxBtm = {
    maxWidth: 600,
    textAlign: 'left',
    marginLeft: 300
}

const VectorImgTop = {
    maxWidth: 200
}

const NonProfitTitle = {
    maxWidth: 300,
    marginTop: 100,
    marginLeft: 70,
    fontSize: 36 

}

const VectorImgBtm = {
    maxWidth: 70,
    marginTop: 50

}

