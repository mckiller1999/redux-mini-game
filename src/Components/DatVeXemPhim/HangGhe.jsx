import React, { Component } from "react";
import { connect } from "react-redux";
import { datGhe } from "../../reduxs/reducer/DatVeXemPhimReducer";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDadat = "";
      let disGhe = false;
      //trạng thái ghế đã đặt
      if (ghe.daDat) {
        cssGheDadat = "gheDuocChon";
        disGhe = true;
      }
      //xét trạng thái ghế đang đặt
      let cssGheDat = "";
      let indexGheDat = this.props.arrGheDat.findIndex(
        (gheDat) => gheDat.soGhe === ghe.soGhe
      );
      if (indexGheDat !== -1) {
        cssGheDat = "gheDangChon";
      }

      return (
        <button
          disabled={disGhe}
          className={`ghe ${cssGheDadat} ${cssGheDat}`}
          key={index}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      );
    });
  };
  // if (index === 0) {
  //   return <span className="rowNumber">{ghe.soGhe}</span>;
  // }
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ms-3">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-start ms-5 mt-1">
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  arrGheDat: state.DatVeXemPhimReducer.arrGheDat,
});

const mapDispatchToProps = (dispatch) => ({
  datGhe: (ghe) => dispatch(datGhe(ghe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
