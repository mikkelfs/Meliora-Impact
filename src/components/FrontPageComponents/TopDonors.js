import {Container, Col, Row} from "react-bootstrap";
import TopDonorsImg from "../../images/TopDonorsImg.png";
import NewNPO from "../../images/NewNPO.png"
import SamsungLogo from "../../images/SamsungLogo.png"
import Tata from "../../images/TataWhiteLogo.png"
import NokiaLogo from "../../images/NokiaLogo.png"
import BrightFuture from "../../images/BrightFuture.png"
import SavetheAralSea from "../../images/SavetheAralSea.png"

const TopDonors = () => {
    return (
        <Container className="mt-5">
          <Col xxl={{offset: 1}} xl={{offset: 1}} className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <Row>
                <Col style={topDonorStyle} >
                    <Row>
                      <Col>
                        <img src={TopDonorsImg} alt="Top Donors" style={imgStyle1}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4 className="fw-bold" style={topDonorText} >
                            57 Companies
                        </h4>
                      </Col>
                    </Row>
                </Col>
            </Row>

          </Col>
        <Col xxl={{offset: 3}} xl={{offset: 3}} lg={{span: 10, offset: 2}} className="mb-3" style={conStyle}>

                    <Row>
                      <Col>
                        <h3>
                            Our top donors in 2020 :
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                        <Col className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" style={{maxWidth: 25}}>
                            <h3>
                                1.
                            </h3>
                        </Col>
                        <Col xxl={5} xl={5} lg={5} className="mt-3">
                            <img src={SamsungLogo} alt="SamsungLogo" style={samsungLogoStyle}/>
                        </Col>
                        <Col className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"  style={{maxWidth: 25}}>
                            <h3>
                                2.
                            </h3>
                        </Col>
                        <Col xxl={2} xl={2} lg={2} className="mt-3">
                            <img src={Tata} alt="Tata" style={logoStyle2}/>
                        </Col>
                        <Col className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" style={{maxWidth: 25}}>
                            <h3 style={nr3Style}>
                                3.
                            </h3>
                        </Col>
                        <Col xxl={2} xl={1} lg={1} className="mt-3">
                            <img src={NokiaLogo} alt="NokiaLogo" style={nokiaLogoStyle} />
                        </Col>
                    </Row>
        </Col>
            <Row>
                <Col xxl={2} xl={{span: 2, offset: 1}} lg={{span: 2}} style={npoStyle}>
                    <Row>
                      <Col>
                        <img src={NewNPO} alt="newNPO" style={imgStyle2}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4 className="fw-bold" style={npoTextStyle}>
                            81 NPOs
                        </h4>
                      </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                      <Col className="mb-2">
                        <h3 style={npoMemberStyle}>
                            Our newest NPO members:
                        </h3>
                      </Col>
                    </Row>
                    <Row>
                        <Col xxl={4} xl={4} lg={4}>
                            <img src={BrightFuture} alt="BrightFuture" style={brightStyle}/>

                        </Col>
                        <Col xxl={4} xl={4} lg={4}>
                            <img src={SavetheAralSea} alt="SavetheAralSea" style={aralSeaStyle}/>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default TopDonors

const topDonorStyle = {

}
const imgStyle1 = {
    width: 88,
    marginBottom: 10
}

const conStyle = {
  marginTop: -100,
}

const samsungLogoStyle = {
  maxWidth: 280,

}

const logoStyle2 = {
    marginTop: -10
}

const nr3Style = {
}

const nokiaLogoStyle = {
  width: 230,
  height: 40
}

const topDonorText = {
}

const npoStyle = {
    marginTop: 20
}
const imgStyle2 = {
    marginBottom: 10
}

const npoTextStyle = {
}

const npoMemberStyle = {
    marginTop: 20
}

const brightStyle = {
    marginTop: 10
}
const aralSeaStyle = {
    marginTop: 10
}