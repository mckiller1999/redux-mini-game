import React, { Component } from "react";
import { connect } from "react-redux";
import { gamePlay2 } from "../../reduxs/reducer/Game2Reducer";

class Player extends Component {
  render() {
    //console.log(this.props.arrGame);
    return (
      <div className="playerGame d-flex flex-column justify-content-center align-items-center mt-1">
        <div className="think ">
          <img
            width={90}
            style={{ transform: "rotate(250deg" }}
            src={this.props.arrGame.find((i) => i.gamePlay === true)?.img}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 120 }}
          src="./assets/game2/player.png"
          alt="..."
          className="mt-3"
        />
        <div className="row">
          {this.props.arrGame.map((item, index) => {
            //console.log(item.gamePlay);
            let border = {};
            if (item.gamePlay) {
              border = { border: "3px solid green" };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  className="btnItem"
                  style={border}
                  onClick={() => {
                    this.props.gamePlay2(item.id);
                  }}
                >
                  <img src={item.img} alt="" style={{ width: 30 }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrGame: state.Game2Reducer.arrGame,
});

const mapDispatchToProps = (dispatch) => ({
  gamePlay2: (id) => {
    dispatch(gamePlay2(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
