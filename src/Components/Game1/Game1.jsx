import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/scss/Game1.scss";
import Roll from "./Roll";
import Result from "./Result";
import { gamePlay, playGameAction } from "../../reduxs/reducer/Game1Reducer";

class Game1 extends Component {
  render() {
    return (
      <div className="game">
        <div className="text-center mt-3 title-game display-6">
          Game Xúc Xắc
        </div>
        <div className="row text-center mt-4">
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.gamePlay(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <Roll />
          </div>
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.gamePlay(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="infoGame text-center">
          <Result />
          <button
            className="btn btn-success mt-3"
            onClick={() => {
              this.props.playGameAction();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  gamePlay: (value) => dispatch(gamePlay(value)),
  playGameAction: () => {
    dispatch(playGameAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game1);
