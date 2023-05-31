import { Container, Row, Col } from 'react-bootstrap'
import NPOMyProjectsBox from '../components/NPO-admin-dashboard/NPOMyprojectsBox'

function NPOMyProjectsCard () {
    return (
        <Container>
            <Row>
                <Col>
                    <NPOMyProjectsBox></NPOMyProjectsBox>
                </Col>
            </Row>
        </Container>
    )
}
export default NPOMyProjectsCard