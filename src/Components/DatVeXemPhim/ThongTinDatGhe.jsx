import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGhe } from "../../reduxs/reducer/DatVeXemPhimReducer";
class ThongTinDatGhe extends Component {
  handleRemove = (soGhe) => {
    this.props.xoaGhe(soGhe);
  };
  render() {
    //console.log(this.props);
    let { arrGheDat, tongTien } = this.props;
    return (
      <div>
        <div className="mt-3">
          <button className="gheDuocChon me-1"></button>
          <span className="text-light" style={{ fontSize: "16px" }}>
            : Ghế đã đặt
          </span>
          <br />
          <button className="  gheDangChon me-1"></button>
          <span className="text-light" style={{ fontSize: "16px" }}>
            : Ghế đang đặt
          </span>
          <br />
          <button className="  ghe me-1" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: "16px" }}>
            : Ghế còn trống
          </span>
          <br />
        </div>
        <div
          className="table-responsive mt-2"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          <table className="table  " border={2}>
            <thead className="table-dark" style={{ fontSize: "20px" }}>
              <tr>
                <th scope="col">Số Ghế </th>
                <th scope="col">Giá </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {arrGheDat.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="col">{value.soGhe} </th>
                    <th scope="col">{value.gia}vnđ </th>
                    <th scope="col">
                      <button
                        style={{ cursor: "pointer" }}
                        className="text-danger"
                        onClick={() => {
                          this.handleRemove(value.soGhe);
                        }}
                      >
                        X
                      </button>
                    </th>
                  </tr>
                );
              })}
              <tr className="table-dark">
                <th scope="col" style={{ fontSize: "13px" }}>
                  Tổng tiền:
                </th>
                <th scope="col">{tongTien}vnđ</th>
                <th scope="col"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  arrGheDat: state.DatVeXemPhimReducer.arrGheDat,
  tongTien: state.DatVeXemPhimReducer.tongTien,
});

const mapDispatchToProps = (dispatch) => ({
  xoaGhe: (soGhe) => dispatch(xoaGhe(soGhe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
