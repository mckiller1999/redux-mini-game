import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../Components/Header";
import { Outlet } from "react-router-dom";

export class HomeTemplates extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ height: "100vh" }}>
          <Outlet />
        </div>
        <footer className="p-5 bg-dark text-white text-center">
          <h3>footer</h3>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTemplates);
