import { Col, Container, Row} from "react-bootstrap";
import FrontPageImg from "../../images/FrontPageImg.png"

const FrontPagePicture = () => {
    return (
        <Container>

                <Row>
                    <Col className="text-center d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block" >
                        <img className="img-fluid" src={FrontPageImg} alt="FrontPageImg" style={imageStyle}/>
                    </Col>
                </Row>

        </Container>
    )
}
export default FrontPagePicture;

const imageStyle = {
    width: 900,
    maxHeight: 400,

}
