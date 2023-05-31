import { Container, Row, Col } from 'react-bootstrap'
import NPOMyProjectsBox from '../../components/NPOAdminDashboard/NPOMyprojectsBox'
import NPOSidebar from '../../components/NPOAdminDashboard/NPOProfileSideBar'

function NPOMyProjectsCard () {
    return (
        <Container>          
            <Row>
                <Col>
                    <NPOSidebar/>
                </Col>
                <Col md={9} xl={9}>
                <Row>
              <Col>
                <div className='text-center'>
                    <h1>My Projects</h1>
                </div>
              </Col>
          </Row> 
                    <NPOMyProjectsBox/>
                </Col>
            </Row>
        </Container>
    )
}
export default NPOMyProjectsCard