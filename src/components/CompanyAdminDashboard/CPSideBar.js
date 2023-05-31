import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import StickyBox from "react-sticky-box";

function CPSideBar() {
  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <Col>
        <Nav>
          <ul style={sideBarStyle}>
            <li>
              <NavLink to={"/CPProfileCard"} activeClassName="active"
                  className="text-white routing white-hover-underline-feedback">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/CPDonations"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                Donations
              </NavLink>
            </li>
            <li>
              <NavLink to={"/CPProject21StatUp"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                Status Report
              </NavLink>
            </li>
            <li>
              <NavLink to={"/page6"} activeClassName="active" className="text-white routing white-hover-underline-feedback">
                Employee Voting
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
export default CPSideBar;

const sideBarStyle = {
  color: "white",
  listStyle: "none",
  fontSize: 'calc(0.7em + 1vw)',
  fontWeight: 700,
};
