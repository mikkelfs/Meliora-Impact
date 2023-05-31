import {Container, Row, Col, Button} from 'react-bootstrap'
import CompaniesHeader from '../components/Companies/CompaniesHeader'
import JoinUsBtn from '../components/Companies/JoinUsBtn'
import CompaniesLogo from '../components/Companies/CompaniesLogo'
import {Link} from "react-router-dom";
import React from "react";

function CompaniesCard ()  {
  return (
      <Container>
          <Row>
              <Col>
                <CompaniesHeader/>
                <CompaniesLogo/>
                  <Link to={"/Page3"} className="text-black routing"><JoinUsBtn></JoinUsBtn></Link>
              </Col>
          </Row>
      </Container>
  )
}

export default CompaniesCard