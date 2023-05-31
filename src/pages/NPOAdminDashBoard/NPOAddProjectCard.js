import { Container, Row, Col } from 'react-bootstrap'
import NPOAddProject from '../../components/NPOAdminDashboard/NPOAddProject'
import NPOProfileSideBar from '../../components/NPOAdminDashboard/NPOProfileSideBar'

function NPOAddProjectCard () {
  return (
      <Container className='py-5'>
          <Row>
              <Col>
                    <div className='text-center'>
                        <h1>Add new project</h1>
                    </div>
              </Col>
          </Row>
          <Row>
              <Col>
                <NPOProfileSideBar/>
              </Col>
              <Col md={9} xl={9}>
                <NPOAddProject/>
              </Col>
          </Row>
      </Container>
    
  )
}

export default NPOAddProjectCard