import {Container, Row, Col} from "react-bootstrap";
import NewNPO from "../images/NewNPO.png"
const NewApplication = () => {
    return (
        <Container className="text-center" style={{height: "70vh"}} >
            <Row>
                <h1 style={headerColor}>Thank you for your application!</h1>
            </Row>
            <Row className="w-100" >
                <Col className="w-50 justify-content-center">
                    <p className="justify-content-center" >Your application is now recieved by our Meloria Impact team. We will get in touch with your NPO within 2 bussines days. Your application will be reviewed based on the criterias we hold to our partner NPOs</p>
                </Col>
            </Row>
            <Row>
                <p>We look forward to work with your NPO, towards making the world a better place.</p>
            </Row>
            <Row className="justify-content-center pb-5">
                <img src={NewNPO} alt="NewNPO" style={imgStyle}/>
            </Row>
        </Container>
    )
}

export default NewApplication;

const headerColor = {
    color: "#0D2E6E",
    marginBottom: 40
}

const imgStyle = {
    width: 85,
    marginTop: 50

}

