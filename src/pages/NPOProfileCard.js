import { Container, Row, Col } from 'react-bootstrap'
import NPOProfileBox from '../components/NPO-admin-dashboard/NPOProfileBox'
import NPOProfileHeader from "../components/NPO-admin-dashboard/NPOProfileHeader"
import NPOProfileSideBar from "../components/NPO-admin-dashboard/NPOProfileSideBar"

function NPOProfileCard () {
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
                <NPOProfileBox/>
              </Col>
          </Row>
      </Container>
    
  )
}

export default NPOProfileCard