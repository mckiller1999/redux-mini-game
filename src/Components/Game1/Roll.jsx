import React, { Component } from "react";
import { connect } from "react-redux";

class Roll extends Component {
  renderRoll = () => {
    return this.props.arrRoll.map((roll, index) => {
      return (
        <img
          key={index}
          className="ms-2"
          style={{ width: 50, height: 50 }}
          src={roll.img}
          alt={roll.id}
        />
      );
    });
  };
  render() {
    return <div className="mx-3">{this.renderRoll()}</div>;
  }
}

const mapStateToProps = (state) => ({
  arrRoll: state.Game1Reducer.arrRoll,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Roll);
