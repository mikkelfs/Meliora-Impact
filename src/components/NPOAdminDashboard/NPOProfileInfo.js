import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"

function CPBoxInfo () {
    return (
        <Container>
            <Row>
                    <Card style={{backgroundColor: 'transparent', border: '5px solid white', borderRadius: 10, maxWidth: 890}}>
                            <Form>
                                <Form.Group>
                                <Col className="p-5">

                                    <Form.Label style={titleStyle}>Contact Person:</Form.Label>
                                    <Form.Control size="lg" style={inputStyle} placeholder="Anna Matveeva (CEO)"/>

                                    <Form.Label style={titleStyle}>organization Name:</Form.Label>
                                    <Form.Control style={inputStyle} placeholder="#SaveAralSea"/>

                                    <Form.Label style={titleStyle}>Org. no</Form.Label>
                                    <Form.Control style={inputStyle} placeholder="4738282992"/>

                                    <Row>
                                        <Col>
                                            <Form.Label style={titleStyle}>Email:</Form.Label>
                                            <Form.Control placeholder=" info@savearalsea.com" style={shortInputStyle}/>
                                        </Col>
                                        <Col>
                                            <Form.Label style={titleStyle}>Mobile:</Form.Label>
                                            <Form.Control placeholder="+32937482924" style={shortInputStyle}/>
                                        </Col>
                                    </Row>
                                    
                                    <Form.Label style={titleStyle}>Adress:</Form.Label>
                                    <Form.Control placeholder="Appletree Avenue 15, 29201 Tashkent, Uzbekistan " style={inputStyle}/>

                                    <Row className="justify-content-end p-5 ">

                                            <Button className="mx-lg-5" style={cancelBtn}>Cancel</Button>

                                            <Button style={saveBtn}>Save Info</Button>
                                    </Row>
                                    </Col>
                                    </Form.Group>
                            </Form>
                    </Card>
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
    height: 73,
}

const shortInputStyle = {
    border: '1px solid #000000',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 73,
}

const cancelBtn = {
    backgroundColor: 'white', 
    color: 'black', 
    width: 170,
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

}

const saveBtn = {
    backgroundColor: '#0D2E6E', 
    color: 'white', 
    width: 170,
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}
