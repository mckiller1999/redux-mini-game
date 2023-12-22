import React, { Component } from "react";
import "../../assets/scss/BaiTapBookingTicket.scss";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class DatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          background: "url(./assets/DatVeXemPhim/bgmovie.jpg) center",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 100,
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-md-8 text-center w-75">
                <h3 className="text-warning">Đặt Vé Xem Phim</h3>
                <p className="text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </p>
                <div className="d-flex flex-grow-1 justify-content-center ">
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-md-4 w-25">
                <h4 className="text-warning">Danh sách đặt ghế</h4>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
