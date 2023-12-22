import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    to=""
                    aria-current="page"
                  >
                    Home <span className="visually-hidden">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <NavLink className="dropdown-item" to="demo1">
                      Game 1
                    </NavLink>
                    <NavLink className="dropdown-item" to="demo2">
                      Game 2
                    </NavLink>
                    <NavLink className="dropdown-item" to="demo-datvephim">
                      Đặt vé xem phim
                    </NavLink>
                    <NavLink className="dropdown-item" to="demo3">
                      Game 3
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Styled Component (jss)
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <NavLink className="dropdown-item" to="styled-component">
                      demo styled component
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    React Hook
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <NavLink className="dropdown-item" to="demo-usestate">
                      demo useState Hook
                    </NavLink>
                    <NavLink className="dropdown-item" to="demo-useeffect">
                      demo useEffect Hook
                    </NavLink>
                    <NavLink className="dropdown-item" to="demo-usecallback">
                      demo useCallBack Hook
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    React animation
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <NavLink className="dropdown-item" to="demo-usespring">
                      useSpring
                    </NavLink>
                  </div>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
