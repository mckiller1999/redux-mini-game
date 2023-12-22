import React from "react";
import QuanCuoc from "./QuanCuoc.jsx";
import { useSelector } from "react-redux";

const DanhSachCuoc = () => {
  const danhSachCuoc = useSelector((state) => state.Game3Reducer.danhSachCuoc);
  //console.log(danhSachCuoc);
  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc quanCuoc={item} />
        </div>
      );
    });
  };
  return <div className="row mt-3 ">{renderDanhSachCuoc()}</div>;
};

export default DanhSachCuoc;
