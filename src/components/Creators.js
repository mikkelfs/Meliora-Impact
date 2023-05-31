import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import ShortLine from './ShortLine'

function Creators ()  {
  return (
    <Container>
        <h1 style={{fontSize: 36}}>The Creators</h1>
        <Row>
            <Col>
                <Row>
                    <Col style={ImgContainer}>
                        <Card className='p-5 text-center'>
                            <Col>
                                <img src="images/acacia.png" style={imgStyle} alt=''/>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Col>
                    <div className='text-center'>
                        <Card.Body>
                            <Card.Title style={NameTitle}>Acacia de Meo</Card.Title>
                            <Card.Text style={RoleTitle}>Partnership</Card.Text>
                            
                            <ShortLine/>

                            <Card.Text className='mt-3'><strong>email:</strong> meo@melioraimpact.no</Card.Text>
                            <Card.Text><strong>mobile:</strong> +47129393920</Card.Text>
                        </Card.Body>
                        <Button className='btn-block' style={BtnStyle}>Contact me</Button>
                    </div>
                </Col>
            </Col>
            <Col style={cardStyle}>
                <Row>
                    <Col style={ImgContainer}>
                        <Card className='p-5 text-center'>
                            <Col>
                                <img src="images/henriette.png" style={imgStyle} alt=''/>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Col>
                    <div className='text-center'>
                        <Card.Body>
                            <Card.Title style={NameTitle}>Henriette Friling</Card.Title>
                            <Card.Text style={RoleTitle}>Non-profit</Card.Text>
                            
                            <ShortLine/>

                            <Card.Text className='mt-3'><strong>email:</strong> friling@melioraimpact.no</Card.Text>
                            <Card.Text><strong>mobile:</strong> +47129393920</Card.Text>
                        </Card.Body>
                        <Button className='btn-block' style={BtnStyle}>Contact me</Button>
                    </div>
                </Col>
            </Col>
            <Col style={cardStyle}>
                <Row>
                    <Col style={ImgContainer}>
                        <Card className='p-5 text-center'>
                            <Col>
                                <img src="images/maria.png" style={imgStyle} alt=''/>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Col>
                    <div className='text-center'>
                        <Card.Body>
                            <Card.Title style={NameTitle}>Maria Lehman</Card.Title>
                            <Card.Text style={RoleTitle}>Product Designer</Card.Text>
                            
                            <ShortLine/>

                            <Card.Text className='mt-3'><strong>email:</strong> lehman@melioraimpact.no</Card.Text>
                            <Card.Text><strong>mobile:</strong> +47129393920</Card.Text>
                        </Card.Body>
                        <Button className='btn-block' style={BtnStyle}>Contact me</Button>
                    </div>
                </Col>
            </Col>
        </Row>
    </Container>
  )
}

export default Creators

const NameTitle = {
    fontSize: 36,
    color: ' #0D2E6E'
}

const RoleTitle = {
    fontSize: 18,
    fontWeight: 'bold'

}

const ImgContainer = {
    width: 380,
    height: 330,
}

const imgStyle = {
    width: 150,
    height: 200
}

const BtnStyle = {
    backgroundColor: '#0D2E6E',
    width: 245,
}

const cardStyle = {
    borderRadius: 100,

}