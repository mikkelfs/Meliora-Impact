import { Container, Row, Col } from "react-bootstrap";
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar";
import CPProfileBox from "../../components/CompanyAdminDashboard/CPProfileBox";

function CPProfileCard() {
  return (
    <Container>
      <Row>
        <Col>
          <CPSideBar/>
        </Col>
        <Col md={9} xl={9}>
          <CPProfileBox/>
        </Col>
      </Row>
    </Container>
  );
}
export default CPProfileCard;
