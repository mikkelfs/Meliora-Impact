import { Container, Row, Col } from "react-bootstrap";

function CPSideBar () {
    return (
        <Container className="align-items-start">
            <Row>
                <Col>
                <nav>
                    <ul style={sideBarStyle}>
                        <li style={{textDecoration: 'underline'}}>Profile</li>
                        <li>Donations</li>
                        <li>Status Report</li>
                        <li>Employee Voting</li>
                        <li>Sign Out</li>
                    </ul>
                </nav>
                </Col>
            </Row>
        </Container>
    )
}
export default CPSideBar

const sideBarStyle = {
    listStyle: 'none',
    fontSize: 24,
    fontWeight: 700,
}