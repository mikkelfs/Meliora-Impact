import { Container, Row, Col, Nav } from 'react-bootstrap'

function NPOSidebar () {
    return (
        <Container>
            <Row>
                <Col>
                    <Nav className="flex-column">
                        <ul style={sideBarStyle}>
                            <li style={{textDecoration: 'underline'}}>Profile</li>
                            <li>My Projects</li>
                            <li>My Donors</li>
                            <li>Sign Out</li>
                        </ul>
                    </Nav>
                </Col>
            </Row>
        </Container>

    )
}
export default NPOSidebar


const sideBarStyle = {
    listStyle: 'none',
    fontSize: 24,
    fontWeight: 700,
}