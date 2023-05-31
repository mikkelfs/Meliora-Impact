import { Container, Row, Col, Card, Button } from "react-bootstrap"

function NPOMyProjectsBox () {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={cardStyle} className="p-3">
                        <Card.Body>
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <Button style={btnStyle}>Add new project</Button>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col style={{maxWidth: 40}}>
                                    <input style={{width: 25, height: 25, color: '#1EB185'}} type="radio"/>
                                </Col>
                                <Col>    
                                    <label style={{fontSize: 18}}>Active projects</label>
                                </Col>
                            </Row>
                            <Row className="p-2">
                                <Card style={activeStyle}>
                                    <img src="rectangle.png" alt=" "/>
                                    <Card.Body style={bodyStyle}>
                                        <Card.Title style={titleStyle}>Project No. 21</Card.Title>
                                        <Card.Text style={bodyTextStyle}>
                                            <u>Duration: September 2020 - March 2023</u>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <h3 className="mt-5" style={{color: '#0D2E6E', fontSize: 24, fontWeight: 400}}>Expired Projects</h3>
                            </Row>
                            <Row className="p-2">
                                <Card style={unactiveStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Card.Title style={titleStyle}>Project No. 20</Card.Title>
                                        <Card.Text style={bodyTextStyle}>
                                            <u>Duration: June 2020 - March 2020</u>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="p-2">
                                <Card style={unactiveStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Card.Title style={titleStyle}>Project No. 19</Card.Title>
                                        <Card.Text style={bodyTextStyle}>
                                            <u>Duration: April 2018 - March 2019</u>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="p-2">
                                <Card style={unactiveStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Card.Title style={titleStyle}>Project No. 18</Card.Title>
                                        <Card.Text style={bodyTextStyle}>
                                            <u>Duration: September 2018 - March 2020</u>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
export default NPOMyProjectsBox
const cardStyle = {
    backgroundColor: 'transparent',
    border: '5px solid white',
    height: 1045,
    width: 890,
}

const bodyStyle = {
    width: 810,
    height: 145,
    marginLeft: 50
}


const btnStyle = {
    backgroundColor: '#59B48E',
    border: '1px solid white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: 226,
    height: 65,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
}

const activeStyle = {
    backgroundColor: '#0D2E6E',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
}

const unactiveStyle = {
    color: '#0D2E6E',
    fontSize: 24,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10


}

const titleStyle = {
    fontSize: 24,
    fontWeight: 400,
    marginTop: 10
}

const bodyTextStyle = {
    fontSize: 18,
    fontWeight: 400,
}