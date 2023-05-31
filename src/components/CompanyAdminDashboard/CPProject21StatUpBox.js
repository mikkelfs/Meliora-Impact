import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import img1 from "../../images/CompanyAdminDashBoard/project21-img1.png";
import img2 from "../../images/CompanyAdminDashBoard/project20-img2.png";
import img3 from "../../images/CompanyAdminDashBoard/project21-img3.png";
import saveAralSea from "../../images/save-aral-sea.png";

function CPProject21StatUpBox() {
  return (
    <div>
      <h1 className="text-center pb-4">Project Status Update</h1>
      <Row className="flex-wrap">
        <Card style={innerCardStyle} className="pb-5">
          <Row className="px-5 pt-5">
            <Col className="d-grid col-12 col-md-8 pt-5">
              <span className="text-center" style={bigBadge}>
                Project No. 21
              </span>
              <p style={pText}>Duration: September 2020 - March 2023</p>
            </Col>
            <Col className="col-12 col-md-4 text-center pb-3">
              <img style={Icons} src={saveAralSea} alt=" " />
              <h3
                style={{
                  textDecoration: "underline",
                  fontSize: 24,
                }}
              >
                #SaveAralSea
              </h3>
            </Col>
          </Row>
          <Row className="px-5">
            <Col className="d-grid">
              <h3 style={boldTitle}>Project Status Report</h3>
              <br />
              <p style={blueText}>
                We are happy to report that Project 21 is very close to reach
                its goal acquiring 50,000 seed pods of saxaul seedlings. We have
                now 38,000 seedlings ready to be planted. We are very excited
                and looking forward to start the next phase of our project in
                the Spring of 2021.
              </p>
            </Col>
          </Row>
          <Row className="px-5 pt-2">
            <p style={progTitle} className="text-center">
              Goal: Acquire 50,000 saxaul seedling pods
            </p>
            <div className="progressBar pb-5">
              <ProgressBar
                style={progressBar}
                now={60}
                label="38,000"
                variant="success"
              ></ProgressBar>
            </div>
          </Row>
          <Row className="px-5">
            <Col className="d-grid">
              <p style={descText}>
                At current moment, we are only 12,000 pods away to reach our
                goal set to 2021. In terms of donations, it means we need $
                6,000 to complete our goal of additional 12,000 pods to cover
                4,000m2 of deserted area.
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center flex wrap px-5 py-3">
            <Col>
              <img style={img1Style} src={img1} alt=" " />
            </Col>
            <Col>
              <img style={img2Style} src={img2} alt=" " />
            </Col>
            <Col>
              <img style={img3Style} src={img3} alt=" " />
            </Col>
          </Row>
          <Row className="px-5">
            <Col className="d-grid">
              <p style={descText}>
                The iniative has engaged the local communities to take part in
                this project and created a sense of hope and positivity among
                the young. The local communities await the long-term effects of
                this project will improve the life quality of local population
                in terms of clean air, reduction of desert storms and increased
                humidity in the air.
              </p>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}
export default CPProject21StatUpBox;

const img1Style = {
  width: 187,
  borderRadius: 10,
};

const img2Style = {
  width: 174,
  borderRadius: 10,
};

const img3Style = {
  width: 167,
  borderRadius: 10,
};

const progressBar = {
  height: 42,
  borderRadius: 20,
  fontSize: 18,
  color: "black",
};

const boldTitle = {
  fontWeight: 700,
  fontSize: 24,
};

const blueText = {
  color: "#0D2E6E",
  fontWeight: 700,
  fontSize: 18,
};

const descText = {
  fontWeight: 400,
  fontSize: 18,
};

const Icons = {
  width: 130,
  height: 122,
  borderRadius: 10,
};

const progTitle = {
  fontWeight: 400,
  fontSize: 18,
};

const pText = {
  fontWeight: 400,
  fontSize: 18,
  textDecoration: "underline",
};

const innerCardStyle = {
  borderRadius: 10,
};

const bigBadge = {
  borderRadius: 10,
  backgroundColor: "#FFD74B",
  color: "black",
  width: 204,
  height: 37,
  border: "none",
  fontWeight: 400,
  fontSize: 24,
};
