import { Container, ProgressBar, Row } from "react-bootstrap";

const percentage = "$ 50,000";
const NpoProgressB = () => {
  return (
    <Container className="pt-5">
      <Row className="text-center py-5">
        <h4>DONATIONS PROGRESS BAR</h4>
      </Row>
      <Row className="pb-5 px-5">
        <div className="progressBar">
          <ProgressBar now={30} label={`${percentage}`} variant="success" />
        </div>
      </Row>
    </Container>
  ); // The progress bar needs height to bigger
};

export default NpoProgressB;
