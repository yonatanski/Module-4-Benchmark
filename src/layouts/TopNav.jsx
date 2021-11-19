import profile from "../assets/img/profile-img.jpeg";
import "../assets/css/TopNav.css";
import Dropdown from "react-bootstrap/Dropdown";

const TopNav = () => {
  return (
    <div className="main-nav-bar pt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light pb-3 position-relative">
        <div className="btn-group ml-auto my-lg-0 d-flex position-relative pr-3">
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-sm dropdown-toggle rounded-pill"
              id="dropdown-basic"
            >
              <img src={profile} className="rounded-circle" />
              Diego 'Ziba' Ba...
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
