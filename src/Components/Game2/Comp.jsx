import React, { Component } from "react";
import { connect } from "react-redux";

class Comp extends Component {
  render() {
    const { com } = this.props;
    let keyframe = `@keyframes randomItem${Date.now()} {
        0%{top: 0px;}
        25% {top: 100px;}
        50% {top: 0px;}
        75% {top: 100px;}
        100% {top: 0px;}

      }`;
    return (
      <div>
        <div className="playerGame d-flex flex-column justify-content-center align-items-center mt-1">
          <style>{keyframe}</style>
          <div className="think " style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                animation: `randomItem${Date.now()} 0.5s`,
                transform: "rotate(90deg)",
                left: "20%",
              }}
              id={com.id}
              width={90}
              src={com.img}
              alt=""
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            style={{ width: 120 }}
            src="./assets/game2/playerComputer.png"
            alt="..."
            className="mt-3"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  com: state.Game2Reducer.com,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
