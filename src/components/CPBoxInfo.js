import { Container, Row, Col, Card, Button } from "react-bootstrap"

function CPBoxInfo () {
    return (
        <Container>
            <Row>
                <Col className="p-5">
                    <Card style={cardStyle}>
                        <Card.Body>

                                <Card.Title style={titleStyle}>Company Person:</Card.Title>
                                <input style={inputStyle} type="text"/>

                                <Card.Title style={titleStyle}>Company Name:</Card.Title>
                                <input style={inputStyle} type="text"/>

                                <Card.Title style={titleStyle}>Org. no</Card.Title>
                                <input style={inputStyle} type="text"/>
                                <Row>
                                    <Col>
                                        <Card.Title style={titleStyle}>Email:</Card.Title>
                                        <input style={shortInputStyle} type="text"/>
                                    </Col>
                                    <Col>
                                        <Card.Title style={titleStyle}>Mobile:</Card.Title>
                                        <input style={shortInputStyle} type="text"/>
                                    </Col>
                                </Row>


                                <Card.Title style={titleStyle}>Adress:</Card.Title>
                                <input style={inputStyle} type="text"/>

                                <Card.Title style={titleStyle}>Subscription type (montly):</Card.Title>

                                <input style={checkboxStyle} type="checkbox"/>
                                <label style={{fontSize: 18, padding: 10}}>Small (50$)</label>

                                <input style={checkboxStyle} type="checkbox" />
                                <label style={{fontSize: 18, padding: 10}}>Medium (75$)</label>

                                <input style={checkboxStyle} type="checkbox" />
                                <label style={{fontSize: 18, padding: 10}}>Large (100$)</label>
                                <Row className="justify-content-end p-5">
                                    <Button style={cancelBtn}>Cancel</Button>
                                    <Button style={saveBtn}>Save Info</Button>
                                </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CPBoxInfo

const cardStyle = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    border: '5px solid white',
    borderRadius: 10,
    width: 890,
    height: 965,
    padding: 15,
    alignItems: 'center'
    
}

const titleStyle = {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
    marginTop: 30
}

const inputStyle = {
    border: '1px solid #000000',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 750,
    height: 73,
}

const shortInputStyle = {
    border: '1px solid #000000',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 73,
    width: 350
}

const cancelBtn = {
    backgroundColor: 'white', 
    color: 'black', 
    width: 170,
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginRight: 30

}

const saveBtn = {
    backgroundColor: '#0D2E6E', 
    color: 'white', 
    width: 170,
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const checkboxStyle = {
    height: 17, 
    width: 19,
    borderRadius: 2,
    border: '1px solid #000000',
}