import { Container, Row, Col, Card } from "react-bootstrap";
import MelioraInfo from "../components/FrontPageComponents/MelioraInfo";
import FrontPagePicture from "../components/FrontPageComponents/FrontPagePicture";
import FrontPageButtons from "../components/FrontPageComponents/FrontPageButtons";
import ProjectOfTheMonth from "../components/FrontPageComponents/ProjectOfTheMonth";
import TopDonors from "../components/FrontPageComponents/TopDonors";
import LongLine from "../components/FrontPageComponents/Line";

function FrontPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <MelioraInfo/>
                    <Card style={{border: '1px solid white'}} className="my-4"/>
                    <FrontPagePicture/>
                    <FrontPageButtons/>
                    <TopDonors/>
                    <Card style={{border: '1px solid white'}} className="my-5"/>
                    <ProjectOfTheMonth/>

                </Col>
            </Row>
        </Container>
    )
}

export default FrontPage;

