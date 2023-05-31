import { Col, Container, Row } from "react-bootstrap";

const MelioraInfo = () => {
    return (
        <Container className="text-center" style={infoStyle}>
            <Row >
                <Col>
                    <h2 className="fw-bold" style={textColor}>
                        "Meliora Impact is building a digital platform where companies can give to nonprofits in a more impactful and sustainable way"
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}
export default MelioraInfo;

const infoStyle = {
    maxWidth: 900,
    height: 112,
    color: "0D2E6E",
    paddingBottom: 100,
}
const textColor = {
    color: "#0D2E6E",
}