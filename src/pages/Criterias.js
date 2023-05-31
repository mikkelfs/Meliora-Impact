import {Container, Row, Col, Card} from "react-bootstrap";

const Criterias = () => {
    return (
        <Container className="mt-5 px-4 d-flex flex-column align-items-center">
            <Row className="text-center">
                <h1 style={{fontSize: 36}}>Criterias for non-profit organizations</h1>
            </Row>
            <Row className="mt-5">
              <Col>
                <h3 style={textStyle}>Meliora Impact has a set of criterias for non-profit organizations who would like to partner up with us. This  a neccessery step in our process on the selection of partners, because this ensures the liability and transparency of our organizations. We operate under strict ethical guidelines, good business practice and have a stringent anti-corruption policy.</h3>
              </Col>
            </Row>
            <Card className="mt-5" style={criteriaStyle}>
                <Row>
                    <h3 style={{fontsize: 36, fontWeight: 700, fontFamily: 'helvetica'}} className="mt-2 mb-5 text-center">Criterias</h3>
                </Row>
                <Row style={listStyle}>
                  <Col>
                    <ol>
                        <li style={liStyle}><strong>Accountable & Transparent:</strong> all nonprofits on our curated list need to have recent financial statements online (for the last tax year).</li>
                        <li style={liStyle}><strong>Direct funds to Cause: </strong>at least 65% of funds need to go directly to the cause.</li>
                        <li style={liStyle}><strong>Financially Stable: </strong>They need to be financially stable - this means able to pay their staff and fulfill their cause. Otherwise funds can fall into administrative costs and/or debt costs.</li>
                        <li style={liStyle}><strong>Geographic Location:</strong> International / global</li>
                        <li style={liStyle}><strong>Operational Length: </strong>Whilst we believe the more financial statements we can assess for previous tax years the better, we do not want to disregard smaller nonprofits that are in their initial phases. If we believe they have a solid focus and the ability to implement it - we will still support them but make this clear to the donor(s).</li>
                        <li style={liStyle}><strong>Affiliations: </strong>Their core values cannot be political or religious. We want high impact and no bias towards any gender, sexual orientation, and/or ethnicity, and no political or religious affiliation.</li>
                        <li style={liStyle}><strong>Clear mission:</strong> The mission of the nonprofits and/or projects in our portfolio needs to be clear and regularly evaluated to show that the activities are in line with the mission.</li>
                        <li style={liStyle}><strong>Evidence-based: </strong>Project activities need to be evidence-based (based in research, informed opinion and/or field expertise).</li>
                        <li style={liStyle}><strong>Ethos:</strong> All of our nonprofits must be working in line with the U.N. Sustainable Development Goals.</li>
                    </ol>
                  </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Criterias;

const textStyle = {
    maxWidth: 900,
    fontSize: 24,
    fontFamily: 'helvetica'
}

const criteriaStyle = {
    backgroundColor: "white",
    maxWidth: 950,
    lineHeight: 1.4,
    borderRadius: 10,
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 20,
    paddingBottom: 30
}

const listStyle = {
  maxWidth: 950,
}

const liStyle = {
    marginBottom: 20
}