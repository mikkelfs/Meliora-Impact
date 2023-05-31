import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import Balloons from "../../images/ThankyouFeedback/Balloons.png";
import VerticalLine from "../../images/ThankyouFeedback/VerticalLine.png";

const FeedbackArray = () => {
  const { id } = useParams();
  const FeedbackArray = [
    {
      name: "GirlsEdu",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "GIRLS EDU.",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
    {
      name: "ForestationPrjct",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "FORESTATION PRJCT",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
    {
      name: "SaveAralSea",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "#SAVEARALSEA",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
    {
      name: "EducationForAll",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "EDUCATION FOR ALL",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
    {
      name: "BrightFuture",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "BRIGHT FUTURE",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
    {
      name: "SaveTheOcean",
      data: {
        SubImage: VerticalLine,
        header: {
          header1: "THANK YOU FOR YOUR ",
          header2: "SUBSCRIPTION BASED ",
          header3: "DONATION TO ",
          header4: "SAVE THE OCEAN",
        },
        title: "What happens now?",
        imageSrc: Balloons,
        text: "Congratulations ! You have officially subscribed to support this non-profit organization.",
        SubText:
          "The organization you have chosen will receive the good news immediately and will get start working on their projects. You can follow their journey through their monthly reports. These reports can be found on your administrative company profile page.",
      },
    },
  ];

  let object = FeedbackArray.find((o) => o.name === id);
  if (object == null) {
    object = FeedbackArray[0];
    return <h1 className="text-center">404 Page not found.</h1>;
  }

  return (
    <Container style={containerHeight}>
      <Row>
        <Col className="col-1">
          <img src={object.data.SubImage} alt="" />
        </Col>
        <Col className="col-11">
          <Row className="pb-5">
            <Col>
              <h1>
                {object.data.header.header1}
                <a style={blueText}>{object.data.header.header2} </a>
                {object.data.header.header3}
                <a style={blueText}> {object.data.header.header4}</a>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={CardBox}>
                <Card.Title style={{ fontSize: 24 }}>
                  {object.data.title}
                </Card.Title>
                <img src={object.data.imageSrc} alt="" className="py-4" />
                <Card.Text style={{ fontSize: 24 }}>
                  {object.data.text}
                </Card.Text>
                <Card.Text style={{ fontSize: 24 }}>
                  {object.data.SubText}
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FeedbackArray;

const containerHeight = {
  height: 1050,
};

const blueText = {
  color: "#0D2E6E",
};

const CardBox = {
  backgroundColor: "transparent",
  border: "none",
};
