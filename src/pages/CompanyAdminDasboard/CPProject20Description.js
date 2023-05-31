import { Col, Container, Row } from "react-bootstrap";
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar";
import CPProject20DescriptionBox from "../../components/CompanyAdminDashboard/CPProject20DescriptionBox";

function CPProject20Description() {
  return (
    <Container>
      <Row>
        <Col className="col-3">
          <CPSideBar />
        </Col>
        <Col className="col-9">
          <CPProject20DescriptionBox />
        </Col>
      </Row>
    </Container>
  );
}
export default CPProject20Description;
