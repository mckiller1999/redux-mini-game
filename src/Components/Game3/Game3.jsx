import React from "react";
import DiemCuoc from "./DiemCuoc";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import "../../assets/scss/Game3.scss";

const Game3 = () => {
  return (
    <div className="container mt-2" id="Game3">
      <div className="p-4">
        <DiemCuoc />
        <div className="row">
          <div className="col-8">
            <DanhSachCuoc />
          </div>
          <div className="col-4">
            <DanhSachXucXac />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game3;
