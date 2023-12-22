import React from "react";
import { useDispatch } from "react-redux";
import { datCuoc } from "../../reduxs/reducer/Game3Reducer";

const QuanCuoc = (props) => {
  const { quanCuoc } = props;
  //console.log(props);
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <img src={quanCuoc.img} alt="" style={{ width: "50%" }} />
      <br />
      <div
        className="bg-success d-flex justify-content-center align-items-center"
        style={{ width: "50%", borderRadius: "5px" }}
      >
        <button
          onClick={() => {
            const action = datCuoc({
              id: quanCuoc.id,
              tangGiam: true,
            });
            dispatch(action);
          }}
          className="btn btn-danger display-1"
        >
          +
        </button>
        <span className="text-warning">{quanCuoc.score}</span>
        <button
          onClick={() => {
            const action = datCuoc({
              id: quanCuoc.id,
              tangGiam: false,
            });
            dispatch(action);
          }}
          className="btn btn-danger display-1 "
        >
          -
        </button>
      </div>
    </div>
  );
};

export default QuanCuoc;
