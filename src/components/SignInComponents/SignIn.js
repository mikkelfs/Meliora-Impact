import {Container, Col, Row, Form, Button} from "react-bootstrap";
import Logo from "../../images/Logo.png";
import {Link} from "react-router-dom";
import React from "react";


const SignIn = () => {
    return (
        <Container style={companyLogin}>

      <Col className="d-flex flex-column justify-content-center d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block" style={{position: 'absolute', marginLeft: 360, marginTop: 50}}>
            <Row className="text-center">
                <img src={Logo} alt="Logo" style={logoStyle} />
            </Row>
            <Row>
                <h1 className="text-center" style={signInStyle}>SIGN IN</h1>

            </Row>
      </Col>
      <Col className=" text-center d-flex flex-column justify-content-center d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none" style={{position: 'absolute', marginLeft: 150, marginTop: 50}}>
            <Row>
                <img src={Logo} alt="Logo" style={logoStyle} />
            </Row>
            <Row className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                <h1 style={signInStyle}>SIGN IN</h1>
            </Row>
      </Col>

            <Form>
                <Row>
                    <Col className="mt-2 mx-1" style={donorStyle}>
                        <Col style={innerDonStyle}>
                            <h4 className="text-decoration-underline" style={signInAs}>Sign in as company</h4>

                            <Form.Group controlId="formUsername" >
                                <Form.Control type="username" placeholder="Username" style={textSize}/>
                            </Form.Group>
                            <Form.Group controlId="formPassword" >
                                <Form.Control type="password" placeholder="Password" style={textSize}/>
                            </Form.Group>
                            <Row>
                                <div>
                                    <Link to={"/CPProfileCard"} className="text-white routing"><Button style={loginStyle} >Login</Button></Link>
                                </div>
                            </Row>
                            <Row>
                                <Link to={"/Page3"} className="text-black routing"><Button style={donorButton}>Register as donor</Button></Link>
                            </Row>
                        </Col>
                    </Col>
                    <Col className="mt-2 mx-1" style={nonProStyle}>
                        <Col style={innerNpoStyle}>
                            <h4 className="text-decoration-underline" style={signInAs}>Sign in as non-profit</h4>
                            <Form.Group controlId="formUsername" >
                                <Form.Control type="username" placeholder="Username" style={textSize}/>
                            </Form.Group>
                            <Form.Group controlId="formPassword" >
                                <Form.Control type="password" placeholder="Password" style={textSize}/>
                            </Form.Group>
                            <Row >
                                <Link to={"/NPOProfileCard"} className="text-white routing"><Button style={nonPLoginStyle}>Login</Button></Link>
                            </Row>
                            <Row>
                                <Link to={"/Page4"} className="text-black routing"><Button style={nonPButton}>Register as non-profit</Button></Link>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Form>
                <h4 className="text-center text-decoration-underline" style={forgotStyle}><Link to={"/ForgotPassword"} className="text-black routing"> Forgot your password? Click here!</Link></h4>

        </Container>
    )
}

export default SignIn;

const logoStyle = {
    width:129,
}

const signInStyle = {
    marginTop: 20,
    color: "#FFFFFF"
}

const companyLogin = {
    maxWidth: 900,

}

const textSize = {
    width: 225,
    height:65,
    borderRadius: 10,
    marginBottom: 20
}

const signInAs = {
    marginBottom: 30
}


const donorStyle = {
    backgroundColor: "#59B48E",
    width: 432,
    height: 799,
    borderRadius: 10,
}

const innerDonStyle = {
    marginLeft: 140,
    marginTop: 350
}

const nonProStyle = {
    backgroundColor: "#F2A0A0",
    width: 432,
    height: 799,
    borderRadius: 10,

}

const innerNpoStyle = {
    marginLeft: 50,
    marginTop: 350
}

const loginStyle = {
    backgroundColor: "#0D2E6E",
    width: 225,
    height: 65,
    border: 'none',
    borderRadius: 10,
    fontSize: 24,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'

}

const nonPLoginStyle = {
    backgroundColor: "#0D2E6E",
    width: 225,
    height: 65,
    marginLeft: 10,
    border: 'none',
    borderRadius: 10,
    fontSize: 24,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'

}

const donorButton = {
    backgroundColor: "#E7E1FA",
    color: "#000000",
    width: 315,
    height: 65,
    marginTop: 30,
    marginLeft: -90,
    border: 'none',
    borderRadius: 10,
    fontSize: 24,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'

}

const nonPButton = {
    backgroundColor: "#E7E1FA",
    color: "#000000",
    width: 315,
    height: 65,
    marginTop: 30,
    marginLeft: 10,
    border: 'none',
    borderRadius: 10,
    fontSize: 24,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const forgotStyle = {
    marginTop: 50
}
