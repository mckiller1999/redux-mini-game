import React from "react";
import XucXac from "./XucXac";
import { useSelector, useDispatch } from "react-redux";
import { gamePlay } from "../../reduxs/reducer/Game3Reducer";

const DanhSachXucXac = (props) => {
  const mangXucXac = useSelector((state) => state.Game3Reducer.mangXucXac);
  const dispatch = useDispatch();
  const actionPlay = () => {
    const action = gamePlay({});

    dispatch(action);
  };
  return (
    <div
      className="bg-white"
      style={{ width: 300, height: 300, borderRadius: "150px" }}
    >
      <div className="row">
        <div
          className="col-12 text-end "
          style={{ marginTop: 0, marginLeft: "80px" }}
        >
          <XucXac xucXac={mangXucXac[0]} />
        </div>
        <div className="col-6 text-end " style={{ marginTop: -35 }}>
          <XucXac xucXac={mangXucXac[1]} />
        </div>
        <div className="col-6 text-end " style={{ marginTop: -35 }}>
          <XucXac xucXac={mangXucXac[2]} />
        </div>
      </div>
      <div className="text-center ">
        <button
          className="btn btn-success"
          onClick={() => {
            actionPlay();
          }}
        >
          Xóc
        </button>
      </div>
    </div>
  );
};

export default DanhSachXucXac;
