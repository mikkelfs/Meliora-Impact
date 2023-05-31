import { Col, Container, Row } from "react-bootstrap";
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar";
import CPProject21StatUpBox from "../../components/CompanyAdminDashboard/CPProject21StatUpBox";

function CPProject21StatUp() {
  return (
    <Container>
      <Row>
        <Col className="col-3">
          <CPSideBar />
        </Col>
        <Col className="col-9">
          <CPProject21StatUpBox />
        </Col>
      </Row>
    </Container>
  );
}
export default CPProject21StatUp;
