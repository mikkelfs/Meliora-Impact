import {Container, Row, Col, Button} from "react-bootstrap";
import ProjectOfTheMonthimg from "../../images/ProjectOfTheMonthimg.png"


const ProjectOfTheMonth = () => {
    return (
        <Container>
          <Row>
            <Col className="mr-3" xxl={{order: 1, span: 2}} xl={2}>
              <h1 style={{ fontWeight: 700, color: '#0D2E6E'}}>PROJECT</h1>
            </Col>
            <Col  xxl={{order: 2, span: 1}} xl={1}>
              <h1 style={{fontWeight: 700, color: '#0D2E6E'}}>OF</h1>
            </Col>
            <Col xxl={{order: 3, span: 1}} xl={1}>
              <h1 style={{ fontWeight: 700, color: '#0D2E6E'}}>THE</h1>
            </Col>
            <Col xxl={{order: 4}} xl={1}>
              <h1 style={{fontWeight: 300, fontStyle: 'italic', color: '#0D2E6E'}}>MONTH</h1>
            </Col>
          </Row>
          <Row>
            <Col xxl={3} xl={4} lg={5} md={6}>
              <img src={ProjectOfTheMonthimg} alt="ProjectOfTheMonth" style={imgStyle}/>
            </Col>
            <Col xl={7} lg={7} md={6} className="mt-4">
              <p style={TextBox}>
                  “Education for all” is only 30 days from finishing their work with the Anisela School in Ethiopia. So far, the project has contributed 500 kids with school equipment, as well as providing clothing and hygenic products for the families. In the last 30 days, the organization hopes to create a sanitation system in the school building.
                </p>
            </Col>
            <Row className="d-flex justify-content-end">
                <Button style={BtnStyle}>Read More</Button>
            </Row>
          </Row>
        </Container>
    )
}

export default ProjectOfTheMonth

const textColor = {
    color: "#0D2E6E",
}

const imgStyle = {
    width: 252,
    height: 232,
    marginTop: 40
}

const TextBox = {
    maxWidth: 678,
    fontSize: 24
}

const BtnStyle = {
    backgroundColor: "#0D2E6E",
    width: 196,
    height: 41,
    borderRadius: 10,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: 20,
    fontWeight: 400,
    border: 'none'
}