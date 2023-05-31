import { Col, Container, Row } from "react-bootstrap";
import NpoLogo from "../../components/Npo/NpoLogo.js";
import NpoDescription from "../../components/Npo/NpoDescription.js";
import NpoProgressB from "../../components/Npo/NpoProgressB";
import NpoImages from "../../components/Npo/NpoImages";
import NpoMission from "../../components/Npo/NpoMission";
import NpoActive from "../../components/Npo/NpoActive";
import "bootstrap/dist/css/bootstrap.min.css";

function EducationForAll() {
  return (
    <Container className="container-fluid px-0">
      <h1>Education For All</h1>
      <NpoLogo />
      <NpoDescription />
      <NpoProgressB />
      <NpoImages />
      <NpoActive />
      <NpoMission />
    </Container>
  );
}

export default EducationForAll;
