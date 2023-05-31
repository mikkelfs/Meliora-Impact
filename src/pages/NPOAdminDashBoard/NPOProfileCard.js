import { Container, Col, Row } from 'react-bootstrap'
import NPOProfileBox from '../../components/NPOAdminDashboard/NPOProfileBox'
import NPOProfileSideBar from "../../components/NPOAdminDashboard/NPOProfileSideBar"

function NPOProfileCard () {
  return (
    <Container>
      <Row>
        <Col>
          <NPOProfileSideBar/>
        </Col>
        <Col  md={9} xl={9}>
        <Row>
        <Col>
          <div className='text-center'>
            <h1>NPO Profile</h1>
          </div>
        </Col>
      </Row>
          <NPOProfileBox/>
        </Col>
      </Row>
    </Container>
  )
}

export default NPOProfileCard