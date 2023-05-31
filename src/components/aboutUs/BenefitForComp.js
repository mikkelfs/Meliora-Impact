import { Container, Row, Col } from "react-bootstrap";
import skyscrapers from "../../images/skyscrapers.png";
import time from "../../images/time.png";
import measure from "../../images/measure.png";
import vote from "../../images/vote.png";

function BenefitForComp() {
  return (
    <Container className="pt-2">
      <Row>
        <Col className="d-none d-sm-none d-md-none d-lg-block p-3">
          <h1 style={LineOne}>Benefits</h1>
          <h1 style={LineTwo}>for</h1>
          <h1 style={LineThree}>companies</h1>
        </Col>

        <Container className="d-lg-none d-md-block d-sm-block col-md-9 text-md-center">
          <Col className="col-sm-12">
            <h1 className="mt-3 mb-4 text-center" style={{ fontSize: 40 }}>
              Benefit for companies
            </h1>
          </Col>
          <Col className="text-center">
            <img src={skyscrapers} alt=" " />
          </Col>
          <Row>
            <Col style={mobileStyle}>
              <p>
                It is time consuming for companies to vet non-profit
                organizations or spesific projects. On our plattform, we hold a
                carefully selected portfolio of non-profit organizations. You
                can schedule your donations, and we will make sure of the rest,
                and you can focus on what is important!
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={mobileStyle}>
              <p>
                You will gain access to exclusive inside stories and reports
                from your chosen non-profit. Through a personal dashboard, your
                company can track the progress and get insights on your
                philanthropic activity and observe how your donations have made
                an impact.
              </p>
            </Col>
          </Row>

          <Row>
            <Col style={mobileStyle}>
              <p>
                We will help your company in engaging your employees on choosing
                which causes to support. We will also make sure that the
                donation you make goes straight to a spesific cause!
              </p>
            </Col>
          </Row>
        </Container>

        <Col className="d-none d-sm-none d-md-none d-lg-block" style={iconTimeStyle}>
          <img className="mr-0 img-fluid" src={time} alt=" " />
        </Col>

        <Col className="d-none d-sm-none d-md-none d-lg-block" style={box}>
          <p>
            It is time consuming for companies to vet non-profit organizations
            or spesific projects . This is something many companies don’t have
            time or resources for. On our plattform, we hold a carefully
            selected portfolio of non-profit organizations. Through our platform
            we will help you align your company values with projects you can
            support, so that donations you make match your company`s vision. You
            can schedule your donations, and we will make sure of the rest, and
            you can focus on what is important !
          </p>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col
            style={{ maxWidth: 555 }}
            className="d-sm-none d-md-none d-lg-block"
          >
            <img className="img-fluid" src={skyscrapers} alt=" " />
          </Col>
          <Col>
            <Row>
              <Col className="d-sm-none d-lg-block" style={iconStyle}>
                <img className="img-fluid" src={measure} alt=" " />
              </Col>
              <Col className="d-none d-sm-none d-md-none d-lg-block" style={box}>
                <p>
                  Meloria Impact will provide your company with the impact
                  measurements of your donations, as well as of the overall
                  status of the projects your company is involved with. You will
                  gain access to exclusive inside stories and reports from your
                  chosen non-profit. Through a personal dashboard, your company
                  can track the progress and get insights on your philanthropic
                  activity and observe how your donations have made an impact.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="d-sm-none d-lg-block" style={iconStyle}>
                <img className="img-fluid" src={vote} alt=" " />
              </Col>
              <Col className="d-sm-none d-md-none d-lg-block" style={box}>
                <p>
                  We will help your company in engaging employees on choosing
                  which causes to support, so in the future considerations your
                  employees and their customers can take part and vote on which
                  nonprofit to support. We will also make sure that the donation
                  you make goes straight to a spesific cause!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BenefitForComp;

const LineOne = {
  fontSize: 48,
};
const LineTwo = {
  marginLeft: 70,
  fontSize: 48,
};

const LineThree = {
  marginLeft: 90,
  fontSize: 48,
};

const box = {
  fontSize: 18,
  marginTop: 10,
  width: 500,
};

const iconStyle = {
  width: 80,
  maxWidth: 90,
  marginTop: 50,
};

const iconTimeStyle = {
  width: 80,
  maxWidth: 90,
  marginTop: 50,
  marginLeft: 20,
};

const mobileStyle = {
  color: "white",
  padding: 10,
};
