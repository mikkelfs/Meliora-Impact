import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"

function CPEditInfoBox () {
    return (
        <Container>
            <Row>
            <h1 className="text-center pb-3">Company Profile</h1>
                <Card style={{backgroundColor: 'transparent', border: '5px solid white', borderRadius: 10, maxWidth: 890}}>
                    <Form>
                        <Form.Group>
                            <Col className="p-5">

                                <Form.Label style={titleStyle}>Contact Person:</Form.Label>
                                <Form.Control style={inputStyle} placeholder="Laura Hansen"/>

                                <Form.Label style={titleStyle}>Company Name:</Form.Label>
                                <Form.Control style={inputStyle} placeholder="Chillout AS"/>

                                <Form.Label style={titleStyle}>Org. no</Form.Label>
                                <Form.Control style={inputStyle} placeholder="12345678909876122"/>

                                <Row>
                                    <Col>
                                        <Form.Label style={titleStyle}>Email:</Form.Label>
                                        <Form.Control style={shortInputStyle} placeholder="info@chillout.no"/>
                                    </Col>
                                    <Col>
                                        <Form.Label style={titleStyle}>Mobile:</Form.Label>
                                        <Form.Control style={shortInputStyle} placeholder="98281719192"/>
                                    </Col>
                                </Row>

                                <Form.Label style={titleStyle}>Adress:</Form.Label>
                                <Form.Control style={inputStyle} placeholder="Markveien 15, 0192 Oslo, Norway"/>


                                <p style={titleStyle}>Subscription type (montly):</p>

                                <input style={checkboxStyle} type="checkbox"/>
                                <label style={{fontSize: 18, padding: 10}}>Small (50$)</label>

                                <input style={checkboxStyle} type="checkbox" />
                                <label style={{fontSize: 18, padding: 10}}>Medium (75$)</label>

                                <input style={checkboxStyle} type="checkbox" />
                                <label style={{fontSize: 18, padding: 10}}>Large (100$)</label>

                                <Row className="justify-content-end p-4">
                                  <Col xl={4} className="mt-2">
                                    <Button style={cancelBtn}>Cancel</Button>
                                  </Col>
                                  <Col xl={4} className="mt-2">
                                    <Button style={saveBtn}>Save Info</Button>
                                  </Col>
                                </Row>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card>
            </Row>
        </Container>
    )
}

export default CPEditInfoBox

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

const checkboxStyle = {
    height: 17, 
    width: 19,
    borderRadius: 2,
    border: '1px solid #000000',
}