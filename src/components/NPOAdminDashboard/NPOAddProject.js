import { Card, Container, Form, Row, Col, Button } from "react-bootstrap"

function NPOAddProject () {
  return (
      <Container>
          <Row>
              <Col>
                <Card style={cardStyle}>
                    <Card style={innerCardStyle}>
                        <Card.Title className="text-center mt-3" style={{fontweight: 600, fontSize: 36, color: '#0D2E6E'}}>Project No.22</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Project name:</Form.Label>
                                    <Form.Control className="text-center" style={{
                                        backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, maxWidth: 745, maxHeight: 70 ,fontSize: 20}} placeholder="Name of the project"/>
                                    <Form.Label className="mt-3" style={labelStyle}>Location:</Form.Label>
                                    <Form.Control className="text-center" style={{
                                        backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, maxWidth: 745, maxHeight: 70 ,fontSize: 20}} placeholder="Where does the project take place?"/>
                                    <Form.Label className="mt-3 mb-3" style={labelStyle}>Duration:</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control className="text-center" style={
                                                {backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, fontSize: 20, maxWidth: 350}} placeholder="From"/>
                                        </Col>
                                        <Col>
                                            <Form.Control className="text-center" style={{
                                                backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, fontSize: 20, maxWidth: 350}} placeholder="To"/>
                                        </Col>
                                    </Row>
                                    <Form.Label className="mt-3" style={labelStyle}>Description</Form.Label>
                                    <Form.Control className="p-4" style={{
                                        backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, fontSize: 20, maxWidth: 745, height: 215, display: 'inline-block'}} 
                                        as="textarea" placeholder="What is the aim of this project? How will you spend the donations? What are the immediate impacts of this project? What are the long-term impacts? "/>
                                    <Form.Label className="mt-3" style={labelStyle}>Target to achieve project objective</Form.Label>
                                    <Form.Control className="text-center" style={
                                        {backgroundColor: 'rgba(72, 71, 71, 0.1)', border: '1px solid #0D2E6E', borderRadius: 10, fontSize: 20, maxWidth: 350}}  placeholder="Example: $50,000"/>
                                </Form.Group>
                            </Form>
                            <Col className="d-flex justify-content-end mt-4">
                                <Button  style={btnStyle}>Add New project</Button>
                            </Col>
                        </Card.Body>
                    </Card>
                </Card>
              </Col>
          </Row>
      </Container>
  )
}

export default NPOAddProject
const cardStyle = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    border: '5px solid white',
    borderRadius: 10,
    maxWidth: 890,
    maxHeight: 1050,
    padding: 15,
    alignItems: 'center'
}

const innerCardStyle = {
    maxWidth: 810,
    maxHeight: 995,
    padding: 20,
    borderRadius: 10
}

const labelStyle = {
    fontWeight: 600,
    fontSize: 24,
    color: '#0D2E6E'
}

const btnStyle = {
    border: '1px solid white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: 225, 
    height: 62, 
    backgroundColor: '#59B48E',
    fontWeight: 700,
    fontSize: 24,
}