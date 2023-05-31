import { Container, Row, Col } from 'react-bootstrap'
import NPOProfileSideBar from '../../components/NPOAdminDashboard/NPOProfileSideBar'
import NPOMyDonorsBox from '../../components/NPOAdminDashboard/NPOMyDonorsBox'

function NPOMyDonorsCard () {
  return (
    <Container>
        <Row>
            <Col>
              <NPOProfileSideBar/>
            </Col>
            <Col md={9} xl={9}>
            <Row>
            <Col>
              <div className='text-center'>
                  <h1>My Donors</h1>
              </div>
            </Col>
        </Row>
              <NPOMyDonorsBox/>
            </Col>
        </Row>
    </Container>
    
  )
}

export default NPOMyDonorsCard