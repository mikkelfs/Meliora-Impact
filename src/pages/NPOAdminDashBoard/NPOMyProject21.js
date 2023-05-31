import { Container, Row, Col } from 'react-bootstrap'
import NPOMyChosenProject from '../../components/NPOAdminDashboard/NPOChosenProject'
import NPOSidebar from '../../components/NPOAdminDashboard/NPOProfileSideBar'

function NPOMyProject21 () {
    return (
        <Container className='py-5'>
          <Row>
              <Col>
                    <div className='text-center'>
                        <h1>My Projects</h1>
                    </div>
              </Col>
          </Row>           
            <Row>
                <Col>
                    <NPOSidebar/>
                </Col>
                <Col lg={10}>
                    <NPOMyChosenProject/>
                </Col>
            </Row>
        </Container>
    )
}
export default NPOMyProject21