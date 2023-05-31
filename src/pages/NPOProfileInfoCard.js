import { Container, Row, Col } from 'react-bootstrap'
import NPOProfileHeader from "../components/NPO-admin-dashboard/NPOProfileHeader"
import NPOProfileSideBar from "../components/NPO-admin-dashboard/NPOProfileSideBar"
import NPOProfileInfo from '../components/NPO-admin-dashboard/NPOProfileInfo'

function NPOProfileInfoCard () {
  return (
      <Container>
          <Row>
              <Col>
                <NPOProfileHeader/>
              </Col>
          </Row>
          <Row>
              <Col>
                <NPOProfileSideBar/>
              </Col>
              <Col>
                <NPOProfileInfo/>
              </Col>
          </Row>
      </Container>
    
  )
}

export default NPOProfileInfoCard