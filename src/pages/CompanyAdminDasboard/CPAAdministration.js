import {Col, Container, Row} from "react-bootstrap";
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar";
import CPAProjects from "../../components/CompanyAdminDashboard/CPAProjects";

function Administration() {
    return (
        <Container>
            <Row className="py-5">
                <Col className="col-3">
                    <CPSideBar />
                </Col>
                <Col className="col-9">
                    <CPAProjects />
                </Col>
            </Row>
        </Container>
    );
}

export default Administration;