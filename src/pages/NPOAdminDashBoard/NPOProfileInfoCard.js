import { Container, Row, Col } from 'react-bootstrap'
import NPOProfileSideBar from "../../components/NPOAdminDashboard/NPOProfileSideBar"
import NPOProfileInfo from '../../components/NPOAdminDashboard/NPOProfileInfo'

function NPOProfileInfoCard () {
  return (
      <Container className='py-5'>
        <Row>
          <Col>
            <div className='text-center'>
              <h1>NPO Profile</h1>
            </div>
          </Col>
        </Row>
          <Row>
              <Col lg={2}>
                <NPOProfileSideBar/>
              </Col>
              <Col className='justify-content-end' lg={10}>
                <NPOProfileInfo/>
              </Col>
          </Row>
      </Container>
    
  )
}

export default NPOProfileInfoCard