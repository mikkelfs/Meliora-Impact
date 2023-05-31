import { Container, Row, Col } from "react-bootstrap";

const SuccessStoryInfo = ({ title, topText, image, bottomText, images }) => {
  const imageList = images.map((image) => (
    <Container className="d-flex flex justify-content-center py-3">
      <img className="img-fluid"
        src={image}
        style={{
          width: 900,
          objectPosition: "center",
          objectFit: "center",
          borderRadius: 10
        }}
        />
    </Container>
  ));

  return (
    <Container className="d-flex flex justify-content-center">

    <Col
      style={{
        color: "white",
        marginBottom: 27,
        maxWidth: 900
      }}
      >
      <h3 style={{ marginBottom: 16 }}>Success Stories </h3>

      <div
        style={{
          borderTop: "1px solid #fff ",
          marginLeft: 2,
          marginRight: 5,
          padding: 10,
          width: "28%",
        }}
        ></div>

      <h2 style={{ marginBottom: 30, color: "#0D2E6E"}}>{title}</h2>

      <p style={{ color: "black" }}>{topText}</p>
      <Container>
        <Row style={{ marginBottom: "13px" }}>{imageList}</Row>
      </Container>

      <p style={{ color: "black"}}>{bottomText}</p>
    </Col>
        </Container>
  );
};

export default SuccessStoryInfo;
