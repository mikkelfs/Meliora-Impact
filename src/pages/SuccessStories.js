import { Container, Row, Col, Card } from "react-bootstrap";
import BlueCard from "../components/BlueCard";
import logo1 from "../images/Tree.png";
import logo2 from "../images/Tatayoungs.png";
import logo3 from "../images/TCS_logo_new_600x200.jpeg";
import logo4 from "../images/Vector-samsung.png";

function SuccessStories() {
  return (
    <Container>
      <h2 className="text-center mb-5" style={{fontSize: 36, fontWeight: 700, fontFamily:'helvetica'}}> Success Stories</h2>
      <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
        <BlueCard
          position={"right"}
          link="/page1"
          title="HOW SAMSUNG HAS  CHANGED THE COURSE OF DESERTATION IN ARAL SEA"
          body="In 2019, the Korean gigant Samsung  decided to become a donor for a forestation non-profit organization #GreenAralSea. The companys contribution of annually $5000 have provided great results. By the end of 2020, the #GreenAralSea initiative were able to plant 1million trees in the harsh deserted region of the Central Asia. In the coming decades these trees will help to reduce C02 emmissions in the world by 5%. "
          >
          <Container>
            <Row style={{ marginBottom: 20 }}>
              <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <img
                  src={logo1}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "center",
                    borderRadius: 10,
                  }}
                  />
              </Col>
            </Row>
          </Container>

          <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <img
              src={logo4}
              style={{
                width: "100%",
                objectPosition: "center",
                objectFit: "center",
                borderRadius: 10,
              }}
              />
          </Col>
        </BlueCard>
      </Col>
      <Col className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
        <BlueCard
          position={"center"}
          link="/page1"
          title="HOW SAMSUNG HAS  CHANGED THE COURSE OF DESERTATION IN ARAL SEA"
          body="In 2019, the Korean gigant Samsung  decided to become a donor for a forestation non-profit organization #GreenAralSea. The companys contribution of annually $5000 have provided great results. By the end of 2020, the #GreenAralSea initiative were able to plant 1million trees in the harsh deserted region of the Central Asia. In the coming decades these trees will help to reduce C02 emmissions in the world by 5%. "
          >
          </BlueCard>
      </Col>
      <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
        <BlueCard
          position={"left"}
          link="/page2"
          title="TATA CONSULTANCY CREATING FUTURE ENGINEERS"
          body="The Indian IT gigant TCS have taken steps to educate the future IT-engineers. Among other donations, the TCS have donated $10,000 to provide Raspberry Pie equipment to Bright Future. This iniative is already bearing fruits, as children supported by Bright Future and TCS are on their way to become the  IT-engineers of tomorrow. "
          >
          <Container>
            <Row style={{ marginBottom: 20 }}>
              <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <img
                  src={logo2}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "center",
                    borderRadius: 10,
                  }}
                  />
              </Col>
            </Row>
            <Row>
              <Col className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <img
                  src={logo3}
                  style={{
                    width: "100%",
                    objectPosition: "center",
                    objectFit: "center",
                    borderRadius: 10,
                  }}
                  />
              </Col>
            </Row>
          </Container>
        </BlueCard>
      </Col>
      <Col className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
      <BlueCard
        position={"center"}
        link="/page2"
        title="TATA CONSULTANCY CREATING FUTURE ENGINEERS"
        body="The Indian IT gigant TCS have taken steps to educate the future IT-engineers. Among other donations, the TCS have donated $10,000 to provide Raspberry Pie equipment to Bright Future. This iniative is already bearing fruits, as children supported by Bright Future and TCS are on their way to become the  IT-engineers of tomorrow. "
        ></BlueCard>
      </Col>
    </Container>
  );
}

export default SuccessStories;
