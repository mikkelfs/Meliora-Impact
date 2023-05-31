import {Container, Row, Col, Card} from 'react-bootstrap'

function AUBoxes () {
  return (
      <Container>
          <Row>
              <Col>
                <Card style={Box}>
                    <Card.Body>
                        <Card.Text>
                            <p style={BoxText}>
                                A research made by the Red Cross has concluded that many companies are often reluctant to actively participate funding in non-profits due to lack of information and time-consuming research that comes with the job.  
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={Box}>
                    <Card.Body>
                        <Card.Text>
                            <p style={BoxText}>
                                The research has shown us that NPOs often struggle to finalize a project due to lack of funding. In the cases where companies have actively been involved through funding and follow-ups, the effeciency of the NPOs has increased by 50%. 
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
          </Row>
          <Row>
            <Col>
                <p style={BodyText}>
                    Based on these factors, our crew in Meliora Impact have realized that there is no existing platform between NPOs with great ideas and companies who wish to create purposeful impact on the society. 
                </p>
            </Col>
          </Row>
      </Container>
  )
}

export default AUBoxes

const Box = {
    backgroundColor: '#0D2E6E',
    color: 'white',
    fontSize: 24,
    borderRadius: 10,
    height: 290,
    padding: 10,
    marginTop: 30


}

const BodyText = {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 24,
    color: 'black'
}
 const BoxText = {
     marginLeft: 20

 }