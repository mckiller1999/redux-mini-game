import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../../reduxs/reducer/Game3Reducer";

const DiemCuoc = (props) => {
  const dispatch = useDispatch();
  const tongDiem = useSelector((state) => state.Game3Reducer.tongDiem);
  return (
    <div className="text-center display-5" style={{ color: "green" }}>
      <h3>Bầu Cua Times</h3>
      <div className="text-center">
        <span
          style={{ fontSize: "16px", borderRadius: "5%" }}
          className="p-2 text-white bg-danger"
        >
          Tiền thưởng:{" "}
          <span className="text-warning">{tongDiem.toLocaleString()}$</span>
        </span>
      </div>
      <div className="text-center">
        <button
          style={{ fontSize: "14px", border: "none" }}
          className="p-2 text-white bg-success"
          onClick={() => {
            const action = restartGame({});
            dispatch(action);
          }}
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
};

export default DiemCuoc;
