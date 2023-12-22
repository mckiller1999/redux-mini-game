import React, { Fragment } from "react";

const XucXac = (props) => {
  let { xucXac } = props;
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="cube__face front"
            style={{ width: "50px" }}
            src={xucXac.img}
            alt=""
          />
          <img
            className="cube__face back"
            style={{ width: "50px" }}
            src="./assets/baucua/ca.png"
            alt=""
          />
          <img
            className="cube__face left"
            style={{ width: "50px" }}
            src="./assets/baucua/ga.png"
            alt=""
          />
          <img
            className="cube__face right"
            style={{ width: "50px" }}
            src="./assets/baucua/bau.png"
            alt=""
          />
          <img
            className="cube__face top"
            style={{ width: "50px" }}
            src="./assets/baucua/cua.png"
            alt=""
          />
          <img
            className="cube__face bottom"
            style={{ width: "50px" }}
            src="./assets/baucua/tom.png"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default XucXac;
