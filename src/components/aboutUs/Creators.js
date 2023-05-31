import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ShortLine from "../ShortLine";
import acacia from "../../images/creators/acacia.png";
import henriette from "../../images/creators/henriette.png";
import maria from "../../images/creators/maria.png";

const Creators = () => {
  const [creators] = useState([
    {
      id: 1,
      name: "Acacia de Meo",
      role: "Partnerships",
      email: "meo@melioraimpact.no",
      mobile: 47129393920,
      imageSrc: acacia,
    },
    {
      id: 2,
      name: "Henriette Friling",
      role: "Non-Profit",
      email: "friling@melioraimpact.no",
      mobile: +47129393920,
      imageSrc: henriette,
    },
    {
      id: 2,
      name: "Mara Lehman",
      role: "Product Designer",
      email: "lehman@melioraimpact.no",
      mobile: 47129393920,
      imageSrc: maria,
    },
  ]);

  return (
    <>
      {creators.map((creator) => (
        <Col className="mt-5 card-group">
          <Card style={{borderRadius: 10, backgroundColor: 'transparent', border: 'none'}} className="col-4">
            <Col>
              <Col className="mx-auto d-block" style={ImgContainer}>
                <Card
                  style={{ border: "none" }}
                  className="p-5 text-center"
                >
                  <Col>
                    <img src={creator.imageSrc} style={imgStyle} alt="" />
                  </Col>
                </Card>
              </Col>
              <Col>
                <div className="text-center">
                  <Card.Body>

                    <Card.Title style={NameTitle}>{creator.name}</Card.Title>
                    <Card.Text style={RoleTitle}>{creator.role}</Card.Text>{" "}
                    <Card style={{border: '1px solid white'}}/>
                    <Card.Text className="mt-2">
                      <strong>email:</strong> {creator.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>mobile:</strong> {creator.mobile}
                    </Card.Text>
                  </Card.Body>
                  <a href="mailto:MeloriaImpact@support.mail.com" className="btn-block routing text-white ABtnStyle" style={BtnStyle}>
                    Contact me
                  </a>
                </div>
              </Col>
            </Col>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Creators;
const NameTitle = {
  fontSize: 36,
  color: " #0D2E6E",
};

const RoleTitle = {
  fontSize: 18,
  fontWeight: "bold",
};

const ImgContainer = {height: 380, width: 330};

const imgStyle = {};

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  width: 245,
  borderRadius: 10
};
