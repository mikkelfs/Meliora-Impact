import { Col, Container, Row } from "react-bootstrap";
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar";
import CPDonationsBox from "../../components/CompanyAdminDashboard/CPDonationsBox";

function CPDonations() {
  return (
    <Container>
      <Row>
        <Col className="col-3">
          <CPSideBar />
        </Col>
        <Col sm={12} md={9} xl={9} className="col-9">
          <CPDonationsBox />
        </Col>
      </Row>
    </Container>
  );
}
export default CPDonations;
