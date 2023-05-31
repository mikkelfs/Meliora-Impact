import { Button, Card, Col, Row } from "react-bootstrap";
import img1 from "../../images/CompanyAdminDashBoard/project20-img1.png";
import img2 from "../../images/CompanyAdminDashBoard/project20-img2.png";

function CPProject20DescriptionBox() {
  return (
    <div>
      <h1 className="text-center pb-3">Project Description</h1>
      <Row className="py-3">
        <Card className="p-5" style={innerCardStyle}>
          <Row className="pb-5">
            <Col className="d-grid">
              <h5 style={title}>Project Id-number:</h5>
              <span className="text-center" style={badge}>
                20
              </span>
              <br />
              <div className="pt-4">
                <h5 style={title}>Duration:</h5>
                <span style={{ fontSize: 20 }}>June 2019- june 2020</span>
              </div>
            </Col>
            <Col>
              <Row className="mb-3 d-flex justify-content-end">
                <Button style={SubBtn}>Subscribe</Button>
              </Row>
              <Row className="mb-3 d-flex justify-content-end">
                <Button style={ReqBtn}>Request info</Button>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-grid">
              <h5 style={title}>Description :</h5>
              <br />
              <p style={descText}>
                This project is aimed at the water channels in the region of the
                Aral Sea. In order to restore the previous levels of sea in the
                Aral Sea, there must be proper water channels that lead to the
                sea basin in the end. The project aims to restore the channels,
                in corperation with engineers within the field. The donations
                will be spent on equipment and workforce needed to construct the
                channels. The engineers who are part of this projcet are working
                as voluenteers from around the world.
              </p>
            </Col>
          </Row>
          <br />
          <Row className="d-flex align-items-center flex wrap">
            <Col>
              <img style={img1Style} src={img1} alt=" " />
            </Col>
            <Col>
              <img style={img2Style} src={img2} alt=" " />
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}
export default CPProject20DescriptionBox;
const img1Style = {
  width: 395,
};

const img2Style = {
  width: 321,
};

const title = {
  fontWeight: 700,
  fontSize: 18,
};
const descText = {
  fontWeight: 400,
  fontSize: 18,
};
const innerCardStyle = {
  borderRadius: 10,
  height: 923,
};
const SubBtn = {
  borderRadius: 10,
  backgroundColor: "#0D2E6E",
  color: "white",
  width: 204,
  height: 37,
  border: "none",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontWeight: 400,
  fontSize: 18,
};

const ReqBtn = {
  borderRadius: 10,
  backgroundColor: "white",
  color: "black",
  width: 204,
  height: 37,
  border: "1px solid black",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontWeight: 400,
  fontSize: 18,
};

const badge = {
  borderRadius: 10,
  backgroundColor: "#FFD74B",
  color: "black",
  width: 118,
  height: 29,
  border: "none",
  fontWeight: 400,
  fontSize: 20,
};
