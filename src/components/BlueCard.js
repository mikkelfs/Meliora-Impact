import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlueCard = ({ children, title, body, link, position }) => {
  if (position == "right") {
    return (
      <Card
        style={{
          background: "#0D2E6E",
          borderRadius: 10,
          color: "white",
          padding: 70,
          display: "flex",
          flexDirection: "row",
          marginBottom: 37,
        }}
      >
        <div
          style={{
            flexBasis: "45%",
            marginRight: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ marginBottom: 16, fontSize: 24 }}>{title} </h2>

          <div
            style={{
              borderTop: "1px solid #fff ",
              marginLeft: 155,
              marginRight: 30,
              padding: 10,
              width: "30%",
            }}
          ></div>

          <span style={{ marginBottom: 16, fontSize: 20, lineHeight: 1.5 }}>{body}</span>
          <Col className="mt-5 d-flex flex-row justify-content-start">
            <Link to={link}>
              <Button
                style={{
                  background: "white",
                  fontSize: '130%',
                  padding: "10px 70px",
                  borderRadius: 10,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  border: 'none',
                  color: 'black'
                }}
              >
                Read more
              </Button>
            </Link>
          </Col>
        </div>

        <div style={{ flexBasis: "50%" }}>{children}</div>
      </Card>
    );
  } else if (position == "left") {
    return (
      <Card
        style={{
          background: "#0D2E6E",
          borderRadius: 10,
          color: "white",
          padding: 70,
          display: "flex",
          flexDirection: "row",
          marginBottom: 27,
        }}
      >
        <div style={{ flexBasis: "50%" }}>{children}</div>

        <div
          style={{
            flexBasis: "40%",
            marginRight: 20,
            marginLeft: 50,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ marginBottom: 16, fontSize: 26 }}>{title} </h2>

          <div
            style={{
              borderTop: "1px solid #fff ",
              marginLeft: 130,
              marginRight: 30,
              padding: 10,
              width: "34%",
              marginBottom: 10
            }}
          ></div>

          <span style={{ marginBottom: 50, fontSize: 22, lineHeight: 1.5 }}>{body}</span>
          <Col className="mt-5 d-flex flex-row justify-content-start">
            <Link to={link}>
              <Button
                style={{
                  background: "white",
                  fontSize: '130%',
                  padding: "10px 70px",
                  borderRadius: 10,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  border: 'none',
                  color: 'black'
                }}>Read more</Button>
            </Link>
          </Col>
        </div>
      </Card>
    );
  } else if (position == "center") {
    return (
      <Card
        style={{
          background: "#0D2E6E",
          borderRadius: 10,
          color: "white",
          padding: 70,
          display: "flex",
          flexDirection: "row",
          marginBottom: 27,
        }}
      >

        <div
          style={{
            flexBasis: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ marginBottom: 16 }}>{title} </h2>

          <div
            style={{
              borderTop: "1px solid #ffff",
              marginLeft: 100,
              marginRight: 50,
              padding: 10,
              width: "50%",
            }}
          ></div>

          <span style={{ marginBottom: 16 }}>{body}</span>
          <div>
            <Link to={link}>
              <button
                style={{
                  background: "white",
                  fontSize: '115%',
                  padding: "10px 70px",
                  borderRadius: 10,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  border: 'none'
                }}
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
};

export default BlueCard;
