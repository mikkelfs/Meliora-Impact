import { Container, Row, Col } from "react-bootstrap"
import CPSideBar from "../../components/CompanyAdminDashboard/CPSideBar"
import CPEditInfoBox from '../../components/CompanyAdminDashboard/CPEditBox'

function CPEditProfileCard () {
    return(
        <Container className="py-5">
            <Row>
              <Col>
                <CPSideBar/>
                </Col>
                <Col md={9} xl={9}>
                    <CPEditInfoBox/>
                </Col>
            </Row>
        </Container>

    )
}
export default CPEditProfileCard