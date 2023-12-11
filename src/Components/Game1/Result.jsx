import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  renderRes = () => {
    const res = this.props.res;
    if (res) {
      return "Tài";
    } else {
      return "Xỉu";
    }
  };
  renderResFinal = () => {
    const resFinal = this.props.finalRes;
    if (resFinal) {
      return "Tài";
    } else {
      return "Xỉu";
    }
  };
  render() {
    const { numPlay, numWin } = this.props;
    return (
      <div className="mt-3">
        <div className="display-5">
          bạn chọn: <span className="text-primary">{this.renderRes()}</span>
        </div>
        <div className="display-5">
          kết quả: <span className="text-danger">{this.renderResFinal()}</span>
        </div>
        <div className="display-5">
          số màn thắng: <span className="text-success">{numWin}</span>
        </div>
        <div className="display-5">
          số màn chơi: <span className="text-primary">{numPlay}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numWin: state.Game1Reducer.numWin,
  numPlay: state.Game1Reducer.numPlay,
  res: state.Game1Reducer.res,
  finalRes: state.Game1Reducer.finalRes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
