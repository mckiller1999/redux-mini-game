import React, { Component } from "react";
import { connect } from "react-redux";

class Res2 extends Component {
  render() {
    const { res, numWin, numPlay } = this.props;
    return (
      <div>
        <div className="display-5 mt-2 text-warning">{res}</div>
        <div className="display-5 mt-2 text-white">
          Số màn chơi: <span className="text-success">{numPlay}</span>
        </div>
        <div className="display-5 mt-2 text-white">
          Số màn thắng: <span className="text-danger">{numWin}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  res: state.Game2Reducer.res,
  numPlay: state.Game2Reducer.numPlay,
  numWin: state.Game2Reducer.numWin,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Res2);
