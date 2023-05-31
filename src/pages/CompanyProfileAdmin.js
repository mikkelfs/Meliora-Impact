import { Container, Row, Col, Button, Text, Grid } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../components/Chart";
import CarbonPerson from "../images/carbon_person.png";
import Trophy from "../images/Vector.png";
import CPSideBar from "../components/CompanyAdminDashboard/CPSideBar";

const CompanyProfileAdmin = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CPSideBar />
        </Col>
        <Col md={9} xl={9}>
          <Col className="d-flex flex-column align-items-center">
            <Row>
              <h1>Employee Voting Section</h1>
            </Row>
            <Row>
              <h3
                style={{
                  color: "#0D2E6E",
                  fontWeight: 900,
                }}
              >
                Which project should Chillout AS support in 2022?
              </h3>
            </Row>
            <Row className="mt-3">
              <p style={{ color: "#0D2E6E", fontSize: 24 }}>
                Our voting results from August 2021 shows that 64% of the
                Chillout AS employees cheer for forestation and enviroment!
              </p>
            </Row>
            <Row>
              <p style={{ color: "#0D2E6E", fontSize: 24 }}>
                Congratulations to #SaveAralSea that has become our partner in
                contributing to a greener future!
              </p>
            </Row>
          </Col>

          <Col>
            <Row>
              <div className="d-flex align-items-end flex-column mr-auto p-2 d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
                <img
                  src={CarbonPerson}
                  style={{
                    height: "60px",
                    position: "relative",
                    bottom: "-680px",
                    right: "1110px",
                  }}
                  alt="Carbon"
                />
              </div>
              <Col className="d-flex mr-auto p-2 d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
                <img
                  src={Trophy}
                  style={{
                    position: "relative",
                    left: "1110px",
                    bottom: "-148px",
                  }}
                  alt="Trophy"
                />
              </Col>
            </Row>
          </Col>

          <Col>
            <Chart></Chart>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyProfileAdmin;
