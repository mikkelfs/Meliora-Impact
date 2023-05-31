import { Container, Row, Col } from "react-bootstrap"
import CPSideBar from "../components/CPSideBar"
import CPInfoHeader from "../components/CPHeader"
import CPBoxInfo from "../components/CPBoxInfo"

function ComProfileAdmin () {
    return(
        <Container>
            <Row>
                <Col>
                    <CPInfoHeader></CPInfoHeader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CPSideBar></CPSideBar>
                </Col>
                <Col>
                    <CPBoxInfo></CPBoxInfo>
                </Col>
            </Row>
        </Container>

    )
}
export default ComProfileAdmin