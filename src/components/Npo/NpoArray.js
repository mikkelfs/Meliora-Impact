import react from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ProgressBar,
} from "react-bootstrap";
import "../../index.css";
import savetheocean from "../../images/NpoPages/SaveTheOcean.png";
import educationforall from "../../images/NpoPages/EducationForAll.png";
import brightFuture from "../../images/NpoPages/BrightFuture.png";
import forestationprjct from "../../images/NpoPages/ForestationPrjct.png";
import savearalsea from "../../images/NpoPages/SaveAralSea.png";
import girlsedu from "../../images/NpoPages/GirlsEdu.png";
import banglogo from "../../images/NpoPages/Banglogo.png";
import chilloutlogo from "../../images/NpoPages/ChilloutLogo.png";
import delllogo from "../../images/NpoPages/DellLogo.png";
import dnblogo from "../../images/NpoPages/Dnblogo.png";
import huaweiLogo from "../../images/NpoPages/HuaweiLogo.png";
import kialogo from "../../images/NpoPages/Kia.png";
import penguinbooks from "../../images/NpoPages/PenguinBooks.png";
import samsunglogo from "../../images/NpoPages/Samsung.png";
import starbuckslogo from "../../images/NpoPages/StarbucksLogo.png";
import turkishairlines from "../../images/NpoPages/Turkish Airlines.png";
import nokialogo from "../../images/NpoPages/NokiaLogo.png";
import SAS1 from "../../images/NpoPages/SAS1.png";
import SAS2 from "../../images/NpoPages/SAS2.png";
import SAS3 from "../../images/NpoPages/SAS3.png";
import Gedu1 from "../../images/NpoPages/Gedu1.png";
import Gedu2 from "../../images/NpoPages/Gedu2.png";
import Gedu3 from "../../images/NpoPages/Gedu3.png";
import Gedu4 from "../../images/NpoPages/Gedu4.png";
import EA1 from "../../images/NpoPages/EA1.png";
import EA2 from "../../images/NpoPages/EA2.png";
import EA3 from "../../images/NpoPages/EA3.png";
import FP1 from "../../images/NpoPages/FP1.png";
import FP2 from "../../images/NpoPages/FP2.png";
import FP3 from "../../images/NpoPages/FP3.png";
import SO1 from "../../images/NpoPages/SO1.png";
import SO2 from "../../images/NpoPages/SO2.png";
import SO3 from "../../images/NpoPages/SO3.png";
import SO4 from "../../images/NpoPages/SO4.png";
import BF1 from "../../images/NpoPages/BF1.png";
import BF2 from "../../images/NpoPages/BF2.png";
import BF3 from "../../images/NpoPages/BF3.png";

const NpoArray = () => {
  const { id } = useParams();
  const NpoArray = [
    {
      name: "GirlsEdu",
      data: {
        imageSrc: girlsedu,
        name: "Girls Edu.",
        text: "Girls Edu. is an educational program for girls in Afghanistan. The organization has been working with girls between the ages of 5-18, where the main focus is to give the students basic knowledge that can provide them with future carrier oppurtunities. So far has Girls Edu. graduated 750 girls. We employ 43 amazing teachers in our family. We aspire to do more and we need you to take part in our vision!",
        ButtonUrl: "/SignInOrSignUpArray2/GirlsEdu",
        SubButtonUrl: "#",
        Donations: "150,000",
        Goal: "200,000",
        Percentage: 75,
        SubImages: [
          Gedu1,
          Gedu2,
          Gedu3,
          Gedu4,
        ],
        ActiveCompanies: {
          activeLogo1: chilloutlogo,
          activeLogo2: dnblogo,
        },
        OurMission:
          "Deforestation is one of the major enviromental concerns in the 21st century. One of the most worrying forms of deforestations is mangrove deforestation. Mangroves are known for absorbing tons of CO2, and loss of these will hasten the global warming. Our mission is to keep the mangroves alive and increase the number of mangroves in Thailand. Moreover, we are looking for to expand the project to other tropical countries. The increased number of mangroves will postpone global warming and increase the bio-diversity in the water.",
        Card: [
          {
            id: 821,
            Duration: "Duration: 28.03.2019-28.03.2020",
            text: "This project focuses on school equipment such as pencils, books and notebooks and such. The goal is to provide 200 students with these equipments before the school start.",
          },{
            id: 820,
            Duration: "Duration: 18.09.2019-20.10.2020",
            text: "This project focuses on providing good sanitary conditions in the school. Current school buildings in the area do not have faciltiies such as bathroom to cover the needs of teachers and students.",
          },
        ],
      },
    },
    {
      name: "ForestationPrjct",
      data: {
        imageSrc: forestationprjct,
        name: "Forestation PRJCT",
        text: "Forestation PRJCT is non-profit organization that focuses on mangrove planting in Thailand. The aim of this initative is to increase the amount of mangroves in the region due to its CO2 absorbent nature of mangroves.",
        ButtonUrl: "/SignInOrSignUpArray2/ForestationPrjct",
        SubButtonUrl: "#",
        Donations: "13,000",
        Goal: "50,000",
        Percentage: 26,
        SubImages: [
          FP1,
          FP2,
          FP3,
        ],
        ActiveCompanies: {
          activeLogo1: turkishairlines,
          activeLogo2: kialogo,
        },
        OurMission:
          "Deforestation is one of the major enviromental concerns in the 21st century. One of the most worrying forms of deforestations is mangrove deforestation. Mangroves are known for absorbing tons of CO2, and loss of these will hasten the global warming. Our mission is to keep the mangroves alive and increase the number of mangroves in Thailand. Moreover, we are looking for to expand the project to other tropical countries. The increased number of mangroves will postpone global warming and increase the bio-diversity in the water.",
        Card: [
          {
            id: 15,
            Duration: "Duration: 10.05.2020-12.10.2021",
            text: "This project focuses on planting of 500 mangrooves in a certain area in Thailand. This will double the amount within 3 years of time.",
          },
        ],
      },
    },
    {
      name: "SaveAralSea",
      data: {
        imageSrc: savearalsea,
        name: "#SaveAralsea",
        text: "#Save Aral Sea is a local initiative to promote forestation by planting local trees in the deserted area of Aral Sea region. The consequences of deforestation are touching every aspect of life in the region, and in the future it will also accelerate the consequences of global warming everywhere. With your support, our team will be provided the neccesseary support, to work in challenging conditions to promote forestetaton and stop the of the man-made ecological catastrophy.",
        ButtonUrl: "/SignInOrSignUpArray2/SaveAralSea",
        SubButtonUrl: "#",
        Donations: "130,000",
        Goal: "200,000",
        Percentage: 65,
        SubImages: [
          SAS1,
          SAS2,
          SAS3,
        ],
        ActiveCompanies: {
          activeLogo1: turkishairlines,
          activeLogo2: huaweiLogo,
        },
        OurMission:
          "The Aral Sea region has been turning into a desert since the 1960s, as the sea is quickly dissappearing due to extreme agricultural projects that have destroyed the eco-system. The lack of trees in the region are causing sand storms, heat and diseases due to high salinity level in the air . If not prevented, this pace of deforestation will affect local people, as well as the global enviromental situation. Our mission is to revert this  challenging deforestation by planting plants and trees that will promote bio-diveristy and obsorb CO2. In our journey we need volunteers and equipment to continue our advanced forestation project. Since 2009, #SaveAralSea has been planting over 3000m2 of area, and we aim to do more with your support!",
        Card: [
          {
            id: 20,
            Duration: "Duration: 12.08.2021-13.10.2021",
            text: "This project focuses on planting 500 saxaul trees that are local to the region, and known for its tolerance towards drough and salinity. The planting will diverse the soil, which in turn will give life to more trees.",
          },{
            id: 19,
            Duration: "Duration: 22.12.2021-22.10.2023",
            text: "This project focuses on channeling the water in the area, so the water channel will provide for a larger area without losing its water levels.",
          },{
            id: 18,
            Duration: "Duration: 02.04.2021-22.10.2023",
            text: "This project fouces on providing the locals with equipment to enable activities that focus on planting trees and creating diversity in the soil",
          },
        ],
      },
    },
    {
      name: "EducationForAll",
      data: {
        imageSrc: educationforall,
        name: "Education for All",
        text: "Education for all, is working towards providing caring support for children in different situations. Currently operating in Panama, our main focus has been children who have been living in orpganages. But we aspire to extend our services further to children who are finacially unable to receive a proper education due to their family situation. With increased support, we could provide children with wide range of education and school equipments.",
        ButtonUrl: "/SignInOrSignUpArray2/EducationForAll",
        SubButtonUrl: "#",
        Donations: "30,000",
        Goal: "50,000",
        Percentage: 60,
        SubImages: [
          EA1,
          EA3,
          EA2,
        ],
        ActiveCompanies: {
          activeLogo1: starbuckslogo,
          activeLogo2: delllogo,
        },
        OurMission:
          "Our mission in Education for All is to give children in Central America the neccessary quality education,  and secure a better future for the coming generation. Since the estabilishment  of the organization in 2009, we have started 100 different schools both in Panama, as well as in neighbouring countries Honduras. Our initiative are keeping children of the streets, and provide them with knowledge, passion and inspiration on their path to adulthood. In total, this organization have provided wings to 400 students per year, an outcome we are very proud of. Take part in this amazing journey with us, in order to secure a better future.",
        Card: [
          {
            id: 2,
            Duration: "Duration: 19.04.2019-22.10.2019",
            text: "This project focuses on giving a place to stay for the orphans and homeless children in the region. To provide a home with the most neccessary equipments such as bedroom and bathroom.",
          },{
            id: 1,
            Duration: "Duration: 19.04.2019-22.10.2019",
            text: "This project focuses on school equipment such as pencils, books and notebooks and such. The goal is to provide 200 students with these equipments before the school start.",
          },
        ],
      },
    },
    {
      name: "BrightFuture",
      data: {
        imageSrc: brightFuture,
        name: "Bright Future",
        text: "Bright Future is a non-profit organization which aims to provide education for refugee children all over the world. Refugees are people who have lost their homes and the usual structure of life is disturbed as a result. As the situation can be prolonged over many years, even decades - during these years children  lose valuable time of education. In Bright Future we want to close the education gap for refugee children.",
        ButtonUrl: "/SignInOrSignUpArray2/BrightFuture",
        SubButtonUrl: "#",
        Donations: "50,000",
        Goal: "100,000",
        Percentage: 50,
        SubImages: [
          BF1,
          BF2,
          BF3,
        ],
        ActiveCompanies: {
          activeLogo1: penguinbooks,
          activeLogo2: banglogo,
        },
        OurMission:
          "The mission of Bright Future is to close the education gap between the refugee children and other children around the world. Today there are 13 million refugee under 18. This unusual status of their families have long term effects on their future. In Bright Future we aim to change this dim prospect of these children, by making sure they will receive a good education and be armored with the neccessery knowledge towards the path of adulthood. Our vision is to make sure that no children is robbed  from a proper  childhood as well as give them the supporting structure on their way to independence.",
        Card: [
          {
            id: 10,
            Duration: "Duration: 01.02.2022-01.02.2024",
            text: "This project focuses on school equipment for refugee children such as pencils, books and notebooks and such. The goal is to provide 1000 students with these equipments..",
          },{
            id: 9,
            Duration: "Duration: 01.01.2020-31.10.2024",
            text: "This project focuses on bringing paid teachers into the refugee area, so the children fleeing from war are not missing and quality of their education standards.",
          },{
            id: 8,
            Duration: "Duration: 31.10.2022-31.10.2024",
            text: "The project focuses on sanitary conditions for the refugee children living in the tents and camps.",
          },
        ],
      },
    },
    {
      name: "SaveTheOcean",
      data: {
        imageSrc: savetheocean,
        name: "Save the Ocean",
        text: "Save the Ocean is a non-profit organization in Brazil that actively works with cleaning the sea from plastic and other type of polluters. The organization has been active since 2012, and consists of 200 activists that work on voluntary basis in their local companies.",
        ButtonUrl: "/SignInOrSignUpArray2/SaveTheOcean",
        SubButtonUrl: "#",
        Donations: "50,000",
        Goal: "250,000",
        Percentage: 20,
        SubImages: [
          SO1,
          SO2,
          SO3,
          SO4,
        ],
        ActiveCompanies: {
          activeLogo1: samsunglogo,
          activeLogo2: nokialogo,
        },
        OurMission:
          "Plastic and other kind of trash is devastating to the life in the oceans. The sea life, including big mammals such as whales are in constant  danger of extinsion due to challenges caused by plastic pollutions. The plastic trash in the sea contribute to high number of deaths in the sea either by suffocating small sized animals or creating digestitve problems for big mammals. Our goal in the Save the Ocean team is to reduce 70% of all the plastic in the coastline of Brazil and operate in the entire country. For the year of 2021, we have already reached a milestone where our team collected 500 tons of plastic from the Bahia coastline in Northern Brazil. We wish to expand our operations to extend to all the Brazlian coastline, as well as growing as a global initative.",
        Card: [
          {
            id: 1,
            Duration: "Duration: 01.02.2022-01.02.2024",
            text: "This project focuses on equipment in order to clean the ocean of 10 tons of plastic pollution. The equipments such as gloves & plastic bags and lunch for the volunteers.",
          },
        ],
      },
    },
  ];

  let object = NpoArray.find((o) => o.name === id);
  if (object == null) {
    object = NpoArray[0];

    return <h1 className="text-center">404 Page not found.</h1>;
  };
  return (
    <Container>
      <Row className="p-3 ">
        <Col className="text-center">
          <img src={object.data.imageSrc} />
        </Col>
      </Row>
      <Card className="npoWhiteLine" />
      <h1 className="text-center py-4">{object.data.name}</h1>
      <Row className="mx-auto text-center py-3">
        <Col md={{ span: 8, offset: 2 }}>
          <p>{object.data.text}</p>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center g-0">
        <Col className="py-1 d-flex justify-content-center">
          <Button className="BtnStyle p-3">
            <Link to={object.data.ButtonUrl} className="text-white routing">
              SUPPORT THIS PROJECT
            </Link>
          </Button>
        </Col>
        <Col className="py-1 d-flex justify-content-center">
          <Button className="BtnStyle p-3">
            <Link to={"/Page3"} className="text-white routing">
              {" "}
              BECOME A MEMBER OF MELIORA
            </Link>
          </Button>
        </Col>
      </Row>
      <Row style={{fontWeight: 300}} className="text-center py-5">
        <h4>DONATIONS PROGRESS BAR</h4>
      </Row>
      <Row className="pb-5 px-5">
        <h2 className="successText colorBlack">Goal: $ {object.data.Goal}</h2>
        <ProgressBar className="NpoProgressbar">
          <ProgressBar className="backgroundColorProgressbar" now={object.data.Percentage} label={<h4 className="successText">$ {object.data.Donations}</h4>} variant="success"/>
        </ProgressBar>
      </Row>
      <Card className="mr-2" style={{border: '1px solid white'}}>
        <Row className="mx-1 PictureAlign d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
          <div className="pictureRow">
            { object.data.SubImages.map(image =>
                <img className="pictureGroup" alt="" src={image} />
            ) }
          </div>
        </Row>
      </Card>
      <Container className="mx-auto p-4">
        <Row className="ms-5 p-3  text-center">
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="ActiveTitle">
              Companies active in this non-profit{" "}
            </h1>
            <Row className="">
              <Col  className="py-5">
                <img src={object.data.ActiveCompanies.activeLogo1} alt=""/>
              </Col>
              <Col  className="py-5">
                <img src={object.data.ActiveCompanies.activeLogo2} alt=""/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="py-3 container-fluid">
        <Row>
          <Card className="mx-auto text-center py-4 npoColorMission">
            <Card.Body>
              <h4 className="pb-4">Our Mission</h4>
              <Card.Text className="pb-3 px-5">
                {object.data.OurMission}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <h2 style={{fontWeight: 500, fontSize: 36, fontFamily: 'helvetica'}} className="text-black text-center projectMarginTop">Other projects with this NPO:</h2>
      <Row className="py-3 px-5 projectMarginTop">
      { object.data.Card.map(cards =>
        <Card key={cards.id} className="ProjectCards mt-3 text-center projectMarginLeft">
        <p className="projectMarginTop">PROJECT ID. {cards.id}</p>
        <p className="projectDuration">{cards.Duration}</p>
        <div className="projectCardsText"> {cards.text} </div>
        <Link to="#" className="projectMargin"><Button className="projectButton"> Go to description </Button> </Link>
        </Card>
      )}
      </Row>
    </Container>
  );
};

export default NpoArray;
