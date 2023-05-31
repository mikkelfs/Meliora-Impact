import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import StickyBox from "react-sticky-box";

function NPOSidebar() {
  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <Col>
        <Nav>
          <ul style={sideBarStyle}>
            <li>
              <NavLink to={"/NPOProfileCard"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/NPOMyProjectsCard"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                My Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={"/NPOMyDonorsCard"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                My Donors
              </NavLink>
            </li>
            <li>
              <NavLink to={"/SignOut"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </Nav>
      </Col>
    </StickyBox>
  );
}
export default NPOSidebar;

const sideBarStyle = {
  color: "white",
  listStyle: "none",
  fontSize: 'calc(0.7em + 1vw)',
  fontWeight: 700,
};
