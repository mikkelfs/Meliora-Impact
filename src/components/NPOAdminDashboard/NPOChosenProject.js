import { Container, Row, Col, Card, Button, ProgressBar } from "react-bootstrap"
import {PencilSquare} from 'react-bootstrap-icons'
import {Check2Square} from 'react-bootstrap-icons'
import {BoxArrowUp} from 'react-bootstrap-icons'

function NPOMyChosenProject () {
    return (
        <Container className="mb-5">
                <Card style={innerCardStyle}>
                    <Row className="mt-5">
                        <Col lg={8}>
                            <Card.Title style={{fontSize: 36, fontweight: 700, color: '#0D2E6E'}}>Project No.21</Card.Title>
                        </Col>
                        <Col className="justify-content-sm-center" lg={4}>
                            <Row className="mb-3">
                                <Button style={btnStyleGreen}> <PencilSquare/> Edit Information</Button>
                            </Row>
                            <Row className="mb-3">
                                <Button style={btnStyleBlue}><Check2Square/> Finalize Project</Button>
                            </Row>
                            <Row className="mb-3">
                                <Button style={btnStyleBlue}><BoxArrowUp/> Upload Project</Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Project No.</strong>
                        </Col>
                        <Col>
                            <p>21</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Project Name:</strong>
                        </Col>
                        <Col>
                            <p>Saxaul seedling pods </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Location:</strong>
                        </Col>
                        <Col>
                            <p>Region of Karakalpakstan</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Description:</strong>
                        </Col>
                        <Col>
                             <p>This project aims to plant saxaul tree seedlings in the deserted region of Karakalpakstan. The area our team has been allowed to operate within consists of 4000m2 of salty desert soil where saxual seedlings will be distributed. The seedlings are protected by a eco-friendly pods that will nourish the seedlings for the  first 2 months to ensure survival. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Mission:</strong>
                        </Col>
                        <Col>
                            <p>In this part of project our goal is to be able to buy 50,000 of this type of saxaul seedlings, which cost 50 cents each seedling.  </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Duration:</strong>
                        </Col>
                        <Col>
                            <p>The duration for this project is from September 2020 to March 2023. The team will move on to plant the seedlings in the Spring of 2021. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <strong>Updated on:</strong>
                        </Col>
                        <Col>
                            <p>12.01.2021</p>
                        </Col>
                    </Row>
                        <strong className="mb-3">Donations Status:</strong>

                        <ProgressBar
                          style={progressBar}
                          now={60}
                          label="$ 130,000"
                          variant="success"
                        ></ProgressBar>
                </Card>
        </Container>
    )
}
export default NPOMyChosenProject
const innerCardStyle = {
    border: '1px solid black',
    borderRadius: 10,
    padding: 30,
    maxWidth: 890,
    height: 1020,
    border: 'none'

}

const btnStyleBlue = {
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: 220, 
    height: 47, 
    backgroundColor: '#0D2E6E',
    fontWeight: 700,
    fontSize: 18
}

const btnStyleGreen = {
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    width: 220, 
    height: 47, 
    backgroundColor: '#59B48E',
    fontWeight: 700,
    fontSize: 18
  
}
const progressBar = {
  height: 42,
  borderRadius: 20,
  fontSize: 18,
  color: "black",
};
