import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/scss/Game2.scss";
import Player from "./Player";
import Comp from "./Comp";
import Res2 from "./Res2";
import { gameplaying2, resGame } from "../../reduxs/reducer/Game2Reducer";

class Game2 extends Component {
  render() {
    return (
      <div className="game2">
        <style></style>
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Res2 />
            <button
              className="mt-4 btn btn-success p-3 display-5"
              onClick={() => {
                this.props.gameplaying2();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Comp />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  gameplaying2: () => {
    let count = 0;
    let randomCom = setInterval(() => {
      dispatch(gameplaying2());
      count++;
      if (count >= 10) {
        clearInterval(randomCom);
        dispatch(resGame());
      }
    }, 100);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game2);
