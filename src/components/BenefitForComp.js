import { Container, Row, Col } from "react-bootstrap"


function BenefitForComp ()  {
  return (
    <Container>
        <Row>
            <Col className="p-3">
                <h1 style={LineOne}>Benefits</h1>
                <h1 style={LineTwo}>for</h1>
                <h1 style={LineThree}>companies</h1>
            </Col>
            <Col style={iconTimeStyle}>
                <img  className='mr-0 img-fluid' src='/images/time.png' alt=" " />
            </Col>
            <Col style={box}>
                <p style={TextStyle}>
                    It is time consuming for companies to vet non-profit organizations or spesific projects . This is something many companies don’t have time or resources for. On our plattform, we hold a carefully selected portfolio of non-profit organizations. Through our platform we will help you align your company values with projects you can support, so that donations you make match your company`s vision. You can schedule your donations, and we will make sure of the rest, and you can focus on what is important ! 
                </p>
            </Col>
        </Row>
    <Container>
        <Row>
            <Col>
                <img style={imgStyle} src='images/skyscrapers.png' alt=" "/>
            </Col>
            <Col>
                <Row>
                    <Col style={iconStyle}>
                        <img className="img-fluid" src='images/measure.png' alt=" " />
                    </Col>
                    <Col style={box}>
                        <p>
                            Meloria Impact will provide your company with the impact measurements of your donations, as well as of the overall status of the projects your company is involved with. You will gain access to exclusive inside stories and reports from your chosen non-profit. Through a personal dashboard, your company can track the progress and get insights on your philanthropic activity and observe how your donations have made an impact. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={iconStyle}>
                            <img className="img-fluid"  src='images/vote.png' alt=" " />
                    </Col>
                    <Col style={box}>
                        <p>
                            We will help your company in engaging employees on choosing which causes to support, so in the future considerations your employees and their customers can take part and vote on which nonprofit to support. We will also make sure that the donation you make goes straight to a spesific cause!
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>    
    </Container>
    )
}

export default BenefitForComp

const LineOne = {
    fontSize: 48
}
const LineTwo = {
    marginLeft: 70,
    fontSize: 48

}

const LineThree = {
    marginLeft: 90,
    fontSize: 48,

}

const box = {
    fontSize: 18,
    width: 475,
    marginTop: 10
    
}

const TextStyle = {
    marginLeft: 40
}

const imgStyle = {
    width: 375,
}

const iconStyle = {
    width: 80,
    maxWidth: 90,
    marginTop: 50,
}

const iconTimeStyle = {
    width: 80,
    maxWidth: 90,
    marginTop: 50,
    marginLeft: 20
}
