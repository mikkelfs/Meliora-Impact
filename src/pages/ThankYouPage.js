import { Container, Row, Col, Button, Text, Grid } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ThankYouPage = () => {
  return (
    <Container>
      <h2
        className="text-center"
        style={{
          color: "#0D2E6E",
          padding: "60px",
          Width: "871px",
          height: "42px",
        }}
      >
        Thank you for subscribing to Meloria Impact Platform{" "}
      </h2>

      <div
        className="col-md-8 mx-auto"
        style={{ borderTop: "1px solid #fff ", width: "169px" }}
      ></div>

      <Row>
        <Col>
          <p
            className="col-md-8 mx-auto"
            style={{ padding: "100px", Width: "871px", height: "42px" }}
          >
            Thank you for becoming a member of Meloria Impact!
          </p>

          <p
            className="col-md-8 mx-auto"
            style={{ padding: "100px", margin: "20px", marginTop: "-180px" }}
          >
            Your subscription is now active, and you can have access to all the
            features that are available with your membership. To sign in to your
            new profile, click here.
          </p>

          <h4
            className="text-center"
            style={{
              color: "#0D2E6E",
              padding: "100px",
              margin: "20px",
              marginTop: "-180px",
              textDecoration: "underline",
            }}
          >
            In the Company Admin Dashboard, you have access to following:
          </h4>

          <div style={{ textAlign: "center" }}>
            <ul
              style={{
                display: "inline-block",
                textAlign: "left;",
              }}
            >
              <li
                style={{
                  color: "#0D2E6E",
                  fontSize: "40px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    position: "relative",
                    left: "-190px",
                  }}
                >
                  Company Profile Information
                </span>
              </li>

              <li
                style={{
                  color: "#0D2E6E",
                  fontSize: "40px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    position: "relative",
                    left: "-5px",
                  }}
                >
                  Current NPOs your company is donating to, with details and
                  goal charts
                </span>
              </li>
              <li
                style={{
                  color: "#0D2E6E",
                  fontSize: "40px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    position: "relative",
                    left: "-210px",
                  }}
                >
                  Manage your donations
                </span>
              </li>
              <li style={{ color: "#0D2E6E", fontSize: "40px" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    position: "relative",
                    left: "-136px",
                  }}
                >
                  Read Status Reports of individual projects{" "}
                </span>
              </li>
              <li style={{ color: "#0D2E6E", fontSize: "40px" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    position: "relative",
                    left: "-138px",
                  }}
                >
                  See other projects, of this particular NPO{" "}
                </span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;
