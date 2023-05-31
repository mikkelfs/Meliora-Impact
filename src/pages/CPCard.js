import { Container, Row, Col } from "react-bootstrap"
import CPSideBar from "../components/CPSideBar"
import CPHeader from "../components/CPHeader"
import CPBox from "../components/CPBox"

function ComProfileAdmin () {
    return(
        <Container>
            <Row>
                <Col>
                    <CPHeader></CPHeader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CPSideBar></CPSideBar>
                </Col>
                <Col>
                    <CPBox></CPBox>
                </Col>
            </Row>
        </Container>

    )
}
export default ComProfileAdmin