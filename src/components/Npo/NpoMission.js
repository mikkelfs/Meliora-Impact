import { Card, Container, Row } from "react-bootstrap";

const NpoMission = () => {
  return (
    <Container className="py-3 container-fluid">
      <Row>
        <Card style={Box} className="mx-auto text-center py-4">
          <Card.Body>
            <h4 className="pb-4">Our Mission</h4>
            <Card.Text className="pb-3 px-5">
              Plastic and other kind of trash is devastating to the life in the
              oceans. The sea life, including big mammals such as whales are in
              constant danger of extinsion due to challenges caused by plastic
              pollutions. The plastic trash in the sea contribute to high number
              of deaths in the sea either by suffocating small sized animals or
              creating digestitve problems for big mammals. Our goal in the Save
              the Ocean team is to reduce 70% of all the plastic in the
              coastline of Brazil and operate in the entire country. For the
              year of 2021, we have already reached a milestone where our team
              collected 500 tons of plastic from the Bahia coastline in Northern
              Brazil. We wish to expand our operations to extend to all the
              Brazilian coastline, as well as growing as a global initiative.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default NpoMission;

const Box = {
  backgroundColor: "#0D2E6E",
  color: "white",
};
