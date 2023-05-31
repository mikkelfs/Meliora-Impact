import {Container, Row, Col, Button, Card} from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";
import {Link} from "react-router-dom";

const CPAProjects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={cardStyle} className="p-4">
                        <Card.Body>
                            <Row>
                                <Col className="text-center">
                                    <h2 style={{color: "#0D2E6E", marginBottom: 40}}>#SaveAralSea Project Overview </h2>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <CircleFill style={{border: "1px solid white", borderRadius: 100}} size={25} color="#BD9CFA"/>
                                    <label className="mx-3" style={{fontSize: 20}}>You are donating to this project</label>
                                </Col>

                            </Row>
                            <Row>

                                <Col>
                                <Card style={currentStyle}>
                                    <Card.Body className="text-left" style={bodyStyle}>
                                        <Row>
                                            <Col>
                                                <h1 style={titleStyle}>Project No. 21</h1>
                                            </Col>
                                            <Col>
                                               <Link to={"/CPProject21StatUp"} className="text-white routing"><Button style={btnWhiteStyle}>Show Report</Button></Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={bodyTextStyle}>
                                                    <u>Duration: September 2020 - March 2021</u>
                                                </p>
                                            </Col>
                                            <Col>
                                                <Button style={btnPurpleStyle}>Edit subscription</Button>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row>
                                <h3 className="mt-5" style={{color: "#000000", fontSize: 24, fontWeight: 400}}>Other projects by this organization:</h3>
                            </Row>

                            <Row className="p-3">

                                <Card style={otherStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Row>
                                            <Col>
                                                <h1 style={titleStyle}>Project No. 20</h1>
                                            </Col>
                                            <Col>
                                                <Button style={btnWhiteStyle}>Go to description</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={bodyTextStyle}>
                                                    <u>Duration: June 2019 - June 2020</u>
                                                </p>
                                            </Col>
                                            <Col>
                                                <Link to={"/CPProject20Description"} className="text-white routing d-flex flex-row align-items-end"><Button style={btnBlueStyle}>Donate</Button></Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="p-3">
                                <Card style={otherStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Row>
                                            <Col>
                                                <h1 style={titleStyle}>Project No. 19</h1>
                                            </Col>
                                            <Col>
                                                <Button style={btnWhiteStyle}>Go to description</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={bodyTextStyle}>
                                                    <u>Duration: April 2018 - March 2019</u>
                                                </p>
                                            </Col>
                                            <Col>
                                                <Button style={btnBlueStyle}>Donate</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="p-3">
                                <Card style={otherStyle}>
                                    <Card.Body style={bodyStyle}>
                                        <Row>
                                            <Col>
                                                <h1 style={titleStyle}>Project No. 18</h1>
                                            </Col>
                                            <Col>
                                                <Button style={btnWhiteStyle}>Go to description</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p style={bodyTextStyle}>
                                                    <u>Duration: September 2018 - May 2020</u>
                                                </p>
                                            </Col>
                                            <Col>
                                                <Button style={btnBlueStyle}>Donate</Button>
                                            </Col>
                                        </Row>
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
export default CPAProjects;





const btnWhiteStyle = {
    backgroundColor: '#FFFFFF',
    color: "#000000",
    marginLeft: 200,
    borderRadius: '10px',
    minWidth: 170,
    maxWidth: 204,
    maxHeight: 37,
    fontSize: 18,
    marginTop: 10,

}

const btnPurpleStyle = {
    backgroundColor: '#BD9CFA',
    color: "#000000",
    marginLeft: 200,
    borderRadius: '10px',
    minWidth: 170,
    maxWidth: 204,
    maxHeight: 37,
    fontSize: 18,
    marginTop: 10,
    border: 'none'

}

const btnBlueStyle = {
    backgroundColor: '#9DBFFF',
    color: "#000000",
    borderRadius: '10px',
    marginLeft: 200,
    minWidth: 170,
    maxWidth: 204,
    maxHeight: 37,
    fontSize: 'calc(0.3em + 1vw)',
    marginTop: 10,
    border: 'none'
}

const cardStyle = {
    backgroundColor: 'transparent',
    border: "5px solid white",
    maxHeight: 1045,
    maxWidth: 910,
    borderRadius: 10,
}

const currentStyle = {
    backgroundColor: '#0D2E6E',
    color: 'white',
    display: 'flex',
    borderRadius: 10,
    borderLeft: "#BD9CFA 50px solid",
    borderTop: "0px",
    borderBottom: "0px"

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
const bodyStyle = {
    height: 145,
}

const otherStyle = {
    backgroundColor: '#0D2E6E',
    color: 'white',
    display: 'flex',
    borderRadius: 10,

    borderLeft: "#FFF 50px solid",
    borderTop: "0px",
    borderBottom: "0px"
}