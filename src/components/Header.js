import { Container, Nav } from "react-bootstrap";
import "./HeaderAndFooter.css";
import { Navbar, Button, Row, Col } from "react-bootstrap";
import Logo from "../../src/images/Logo.png";

function BootstrapNavBar() {
  return (
    <div className="wholeDiv">
      <Container fluid style={{ overflowX: "hidden" }}>
        <Navbar expand="lg">
          <Row className="">
            <Navbar.Brand href="#">
              <div className="container-fluid" id="flexBox">
                <div className="navbar-header">
                  <div className="mb-3 flexForBoot">
                    <a href={"/"}>
                      <img src={Logo} id="logoImg" alt="Meliora Impact logo" />
                    </a>
                    <h3
                      id="company-name"
                      className="d-none d-sm-none d-md-block d-lg-block px-3"
                    >
                      Meliora Impact
                    </h3>
                  </div>
                </div>
                <div className="nav navbar-nav navbar-right">
                  <div className="flexForBoot2">
                    <Button style={{border: 'none'}}
                      id="sign"
                      className="btn btn-light"
                      href={"/SignInPage"}
                    >
                      Sign in
                    </Button>

                    <Button id="join" style={{border: 'none'}} href={"/Page3"}>
                      Join us
                    </Button>
                  </div>
                </div>
              </div>
              <Row>
                <div
                  style={{
                    backgroundColor: "black",
                    height: "1px",
                    width: "100vw",
                  }}
                ></div>
              </Row>
              <Row>
                <Col className="">
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="m-auto my-2 my-lg-0"
                      style={{ maxHeight: 200, border: "none" }}
                      navbarScroll
                    >
                      <div className="px-4">
                        <a
                          activeClassName="active"
                          className="text-black routing black-hover-underline-feedback"
                          href={"/"}
                        >
                          Home
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          className="text-black routing hover-underline-feedback"
                          href={"/CompaniesCard"}
                        >
                          Companies
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          className="text-black routing hover-underline-feedback"
                          href={"/NPOPage"}
                        >
                          NPO
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          className="text-black routing hover-underline-feedback"
                          href={"/success-stories"}
                        >
                          Success Stories
                        </a>
                      </div>
                      <div className="px-4">
                        <a
                          className="text-black routing hover-underline-feedback"
                          href={"/AboutUs"}
                        >
                          About us
                        </a>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Navbar.Brand>

            <Navbar.Toggle style={{ border: "none" }} />
          </Row>
        </Navbar>
      </Container>
    </div>
  );
}

export default BootstrapNavBar;
